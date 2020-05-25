const { admin, db } = require('../util/admin');
const config = require('../util/config');

const firebase = require('firebase');

firebase.initializeApp(config);

const { validateLoginData, validateSignUpData, validateAddEventData } = require('../util/validators');

// Login
exports.loginMember = (request, response) => {
    const member = {
        email: request.body.email,
        password: request.body.password
    }

    const { valid, errors } = validateLoginData(member);
	if (!valid) return response.status(400).json(errors);

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
            return response.status(403).json(
                { 
                    general: 'Wrong credentials, please try again' 
                }
            );
        })
};

// Sign up
exports.signUpMember = (request, response) => {
    if(request.body.major != "Other")
        request.body.otherMajor = "";
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
        points: 0
    };

    const { valid, errors } = validateSignUpData(newMember);

	if (!valid) return response.status(400).json(errors);

    let token, memberId;
    db
        .doc(`/members/${newMember.netid}`)
        .get()
        .then((doc) => {
            if (doc.exists && doc.data().isUser == true) {
                return response.status(400).json({ netid: 'This NetID is already associated with an account' });
            } else {
                if (doc.exists){
                    newMember.events = doc.data().events;
                    const document = db.doc(`/members/${newMember.netid}`);
                    document.delete();
                }
                return firebase
                        .auth()
                        .createUserWithEmailAndPassword(
                            newMember.email, 
                            newMember.password
                    );
            }
        })
        .then((data) => {
            memberId = data.user.uid;
            return data.user.getIdToken();
        })
        .then((idtoken) => {
            token = idtoken;
            if(newMember.major != "Other")
                newMember.otherMajor = "";
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
                memberId
            };
            return db
                    .doc(`/members/${newMember.netid}`)
                    .set(memberInfo);
        })
        .then(()=>{
            return response.status(201).json({ token });
        })
        .catch((err) => {
			console.error(err);
			if (err.code === 'auth/email-already-in-use') {
				return response.status(400).json({ email: 'Email already in use' });
			} else {
				return response.status(500).json({ general: 'Something went wrong, please try again' });
			}
		});
}

exports.getMemberDetail = (request, response) => {
    let memberData = {};
	db
        .doc(`/members/${request.member.netid}`)
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
}

exports.updateMemberDetails = (request, response) => {
    let document = db.collection('members').doc(`${request.member.netid}`);
    document.update(request.body)
    .then(()=> {
        response.json({message: 'Updated successfully'});
    })
    .catch((error) => {
        console.error(error);
        return response.status(500).json({ 
            message: "Cannot Update the value"
        });
    });
}

// Add event and points to member
exports.addEventMember = (request, response) => {
    const eventToAdd = {
        eventPoints: request.body.eventPoints,
        eventName: request.body.eventName,
        eventDate: request.body.eventDate
    }
    const memberRequest = {
        firstName: request.body.firstName,
        lastName: request.body.lastName,
        email: request.body.email,
        phoneNumber: request.body.phoneNumber,
        classification: request.body.classification,
        major: request.body.major,
        otherMajor: request.body.otherMajor,
        netid: request.body.netid,
    };
    const { valid, errors } = validateAddEventData(memberRequest);
	if (!valid) return response.status(400).json(errors);

    let memberId;
    db
        .doc(`/members/${memberRequest.netid}`)
        .get()
        .then((doc) => {
            if (doc.exists) {
                let eventsList = doc.data().events
                eventsList.push(eventToAdd)
                let newPointTotal = parseInt(doc.data().points) + parseInt(eventToAdd.eventPoints)
                const updatedMember = {
                    events: eventsList,
                    points: newPointTotal
                }
                db.doc(`/members/${memberRequest.netid}`).update(updatedMember)
                return response.status(201).json({ general: 'Member updated' });
            } else {
                memberId = memberRequest.netid
                const memberInfo = {
                    firstName: memberRequest.firstName,
                    lastName: memberRequest.lastName,
                    netid: memberRequest.netid,
                    phoneNumber: memberRequest.phoneNumber,
                    classification: memberRequest.classification,
                    major: memberRequest.major,
                    otherMajor: memberRequest.otherMajor,
                    email: memberRequest.email,
                    isMember: false,
                    events: [eventToAdd],
                    points: eventToAdd.eventPoints,
                    createdAt: new Date().toISOString(),
                    memberId
                };
                db
                    .doc(`/members/${memberRequest.netid}`)
                    .set(memberInfo);
                    return response.status(201).json({ general: 'Member added' });
            };
        })
        .catch((err) => {
			console.error(err);
			return response.status(500).json({ general: 'Something went wrong, please try again' });
		});
}