// auth.js

// checks if the user is logged in

const { admin, db } = require("./admin");

module.exports = (request, response, next) => {
  let idToken;
  if (
    request.headers.authorization &&
    request.headers.authorization.startsWith("Bearer ")
  ) {
    idToken = request.headers.authorization.split("Bearer ")[1];
  } else {
    console.error("No token found");
    return response.status(403).json({ error: "Unauthorized" });
  }
  admin
    .auth()
    .verifyIdToken(idToken)
    .then((decodedToken) => {
      request.member = decodedToken;
      return db
        .collection("members")
        .where("memberId", "==", request.member.uid)
        .limit(1)
        .get();
    })
    .then((data) => {
      request.member.netid = data.docs[0].data().netid;
      return next();
    })
    .catch((err) => {
      console.error("Error while verifying token", err);
      return response.status(403).json(err);
    });
};
