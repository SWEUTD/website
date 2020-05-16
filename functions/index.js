const functions = require('firebase-functions');
const app = require('express')();
const auth = require('./util/auth');
 
const {
    getAllEvents,
    getOneEvent,
    postOneEvent,
    deleteEvent,
    editEvent
} = require('./APIs/events')

const { 
    loginUser,
    signUpUser,
    getUserDetail,
    updateUserDetails
} = require('./APIs/users')

// Events
app.get('/events', auth, getAllEvents);
app.get('/event/:eventId', auth, getOneEvent);
app.post('/event',auth, postOneEvent);
app.delete('/event/:eventId',auth, deleteEvent);
app.put('/event/:eventId',auth, editEvent);

// Users
app.post('/login', loginUser);
app.post('/signup', signUpUser);
app.post('/user', auth, updateUserDetails);
app.get('/user', auth, getUserDetail);

exports.api = functions.https.onRequest(app);