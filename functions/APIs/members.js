// members.js

// modifying a SWE member's entry in the Firebase database

// created with help from the article: https://www.freecodecamp.org/news/how-to-build-a-todo-application-using-reactjs-and-firebase/

const { db } = require("../util/admin");
const config = require("../util/config"); // this config file is not in the github, found in firebase console

const firebase = require("firebase");

firebase.initializeApp(config);

const {
  validateLoginData,
  validateSignUpData,
  validateAddEventData,
} = require("../util/validators");

// Login a user given their email and password
exports.loginMember = (request, response) => {
  const member = {
    email: request.body.email,
    password: request.body.password,
  };

  const { valid, errors } = validateLoginData(member);
  if (!valid) return response.status(400).json(errors);

  // idtoken is returned from firebase once user is authenticated
  firebase
    .auth()
    .signInWithEmailAndPassword(member.email, member.password)
    .then((data) => {
      return data.user.getIdToken();
    })
    .then((token) => {
      return response.json({ token });
    })
    .catch((error) => {
      console.error(error);
      return response.status(403).json({
        general: "Wrong credentials, please try again",
      });
    });
};

// Sign up a new user
exports.signUpMember = (request, response) => {
  // only allow user to set other major if they do not have one of the pre-defined majors
  if (request.body.major != "Other") request.body.otherMajor = "";
  let newMember = {
    firstName: request.body.firstName,
    lastName: request.body.lastName,
    email: request.body.email,
    phoneNumber: request.body.phoneNumber,
    classification: request.body.classification,
    major: request.body.major,
    otherMajor: request.body.otherMajor,
    password: request.body.password,
    confirmPassword: request.body.confirmPassword,
    netid: request.body.netid,
    events: [],
    points: 0,
  };

  // validate all data (make sure it is proper format)
  const { valid, errors } = validateSignUpData(newMember);

  if (!valid) return response.status(400).json(errors);

  let token, memberId;
  db
    // check if that netid is already in use
    .doc(`/members/${newMember.netid}`)
    .get()
    .then((doc) => {
      if (doc.exists && doc.data().isUser == true) {
        return response
          .status(400)
          .json({ netid: "This NetID is already associated with an account" });
      } else {
        // if netid already exists, but is not connected to an account, copy over the data to the new account and delete the old record
        if (doc.exists) {
          newMember.events = doc.data().events;
          newMember.points = doc.data().points;
          const document = db.doc(`/members/${newMember.netid}`);
          document.delete();
        }
        // create user auth with firebase
        return firebase
          .auth()
          .createUserWithEmailAndPassword(newMember.email, newMember.password);
      }
    })
    // get the idtoken to log the user in
    .then((data) => {
      memberId = data.user.uid;
      return data.user.getIdToken();
    })
    .then((idtoken) => {
      token = idtoken;
      if (newMember.major != "Other") newMember.otherMajor = "";
      const memberInfo = {
        firstName: newMember.firstName,
        lastName: newMember.lastName,
        netid: newMember.netid,
        phoneNumber: newMember.phoneNumber,
        classification: newMember.classification,
        major: newMember.major,
        otherMajor: newMember.otherMajor,
        email: newMember.email,
        events: newMember.events,
        points: newMember.points,
        createdAt: new Date().toISOString(),
        memberId,
      };
      return db.doc(`/members/${newMember.netid}`).set(memberInfo);
    })
    .then(() => {
      return response.status(201).json({ token });
    })
    .catch((err) => {
      console.error(err);
      if (err.code === "auth/email-already-in-use") {
        return response.status(400).json({ email: "Email already in use" });
      } else {
        return response
          .status(500)
          .json({ general: "Something went wrong, please try again" });
      }
    });
};

// get a member's information based on their netid
exports.getMemberDetail = (request, response) => {
  let memberData = {};
  db.doc(`/members/${request.member.netid}`)
    .get()
    .then((doc) => {
      if (doc.exists) {
        memberData.memberInfo = doc.data();
        return response.json(memberData);
      }
    })
    .catch((error) => {
      console.error(error);
      return response.status(500).json({ error: error.code });
    });
};

// update a member's details in the database
exports.updateMemberDetails = (request, response) => {
  let document = db.collection("members").doc(`${request.member.netid}`);
  document
    .update(request.body)
    .then(() => {
      response.json({ message: "Updated successfully" });
    })
    .catch((error) => {
      console.error(error);
      return response.status(500).json({
        message: "Cannot Update the value",
      });
    });
};

// get a list of users for the alumni page
exports.getAlumniList = async (request, response) => {
  db.collection("members")
    .where("showAlum", "==", true)
    .get()
    .then((snapshot) => {
      if (snapshot.empty) {
        return response.status(200).json({ users: [] });
      }
      return response
        .status(200)
        .json({ users: snapshot.docs.map((doc) => doc.data()) });
    })
    .catch((error) => {
      console.error(error);
      return response.status(500).json({
        message: "Cannot provide the list.",
      });
    });
};

// gets information about an event from it's ID
exports.eventLookup = async (request, response) => {
  db.collection("events")
    .doc(request.query.eventId)
    .get()
    .then((doc) => {
      if (doc.exists) {
        return response.status(200).json({ eventInfo: doc.data() });
      } else {
        return response.status(404).json({
          message: "The event does not exist.",
        });
      }
    })
    .catch((error) => {
      console.error(error);
      return response.status(500).json({
        message: "There was an issue getting the event information.",
      });
    });
};

// get a list of users for the member list in admin portal
exports.getMemberList = async (request, response) => {
  db.collection("members")
    .get()
    .then((snapshot) => {
      if (snapshot.empty) {
        console.log("empty list");
        return response.status(200).json({ users: [] });
      }
      console.log("non empty list");
      console.log(snapshot.docs);
      return response
        .status(200)
        .json({ users: snapshot.docs.map((doc) => doc.data()) });
    })
    .catch((error) => {
      console.error(error);
      return response.status(500).json({
        message: "Cannot provide the list.",
      });
    });
};

// Add new event to a member
exports.addEventMember = (request, response) => {
  const netid = request.member.netid;
  // each event has a points value, name, and date
  const eventToAdd = {
    eventPoints: request.body.eventPoints,
    eventName: request.body.eventName,
    eventDate: request.body.eventDate,
  };

  db.doc(`/members/${netid}`)
    .get()
    .then((doc) => {
      // adds to an existing member if that netid already exists in the database
      if (doc.exists) {
        let eventsList = doc.data().events;
        if (
          eventsList.some((event) => event.eventName === eventToAdd.eventName)
        ) {
          // already exists, so don't add it again
          return response.status(409).json({
            general: "You have already added this event to your account.",
          });
        }
        eventsList.push(eventToAdd);
        let newPointTotal =
          parseInt(doc.data().points) + parseInt(eventToAdd.eventPoints);
        const updatedMember = {
          events: eventsList,
          points: newPointTotal,
        };
        db.doc(`/members/${netid}`).update(updatedMember);
        return response.status(200).json({ general: "Member updated" });
      } else {
        return response.status(500).json({
          general: "Was not able to find account.",
        });
      }
    })
    .catch((err) => {
      console.error(err);
      return response
        .status(500)
        .json({ general: "Something went wrong, please try again" });
    });
};
