var admin = require("firebase-admin");

var serviceAccount = require("./serviceAccountKey.json"); // Download from Firebase

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://swe-utd-portal.firebaseio.com"
});

var db = admin.firestore();

db.collection("members").get().then(function(querySnapshot) {
    test = 0;
    querySnapshot.forEach(function(doc) {
        prevMap = {}

        // Check if the user already has a previousPoints map
        if(doc._fieldsProto.previousPoints != undefined) {
            prevMap = doc._fieldsProto.previousPoints.mapValue.fields;

            // Copy over old values (add new semesters)

            // Summer 2020
            if(doc._fieldsProto.previousPoints.mapValue.fields.summer2020 != undefined) {
                prevMap.summer2020 = parseInt(doc._fieldsProto.previousPoints.mapValue.fields.summer2020.integerValue);
            }
            // Fall 2020
            if(doc._fieldsProto.previousPoints.mapValue.fields.fall2020 != undefined) {
                prevMap.fall2020 = parseInt(doc._fieldsProto.previousPoints.mapValue.fields.fall2020.integerValue);
            }
            // Spring 2021
            if(doc._fieldsProto.previousPoints.mapValue.fields.spring2021 != undefined) {
                prevMap.spring2021 = parseInt(doc._fieldsProto.previousPoints.mapValue.fields.spring2021.integerValue);
            }
        }

        // Move the current points value to Fall 2020 (update to current semester)
        if(doc._fieldsProto.points != undefined && doc._fieldsProto.points.integerValue != 0) {
            //var fall2020 = parseInt(doc._fieldsProto.points.integerValue);
            //prevMap.fall2020 = fall2020;
            var spring2021 = parseInt(doc._fieldsProto.points.integerValue);
            prevMap.spring2021 = spring2021;
        }

        // Set current points to zero and store previous points
        doc.ref.update({
            points: 0,
            previousPoints: prevMap
        })
        
        // Print out the current points for debugging
        // console.log(doc._fieldsProto.points);
    });
});