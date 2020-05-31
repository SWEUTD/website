const functions = require('firebase-functions');
const cors = require('cors')
const app = require('express')();
const auth = require('./util/auth');

app.use(cors())
 
const {
    getAllEvents,
    getOneEvent,
    postOneEvent,
    deleteEvent,
    editEvent
} = require('./APIs/events')

const { 
    loginMember,
    signUpMember,
    getMemberDetail,
    updateMemberDetails,
    addEventMember,
} = require('./APIs/members')

// Events
app.get('/events', auth, getAllEvents);
app.get('/event/:eventId', auth, getOneEvent);
app.post('/event',auth, postOneEvent);
app.delete('/event/:eventId',auth, deleteEvent);
app.put('/event/:eventId',auth, editEvent);

// Members
app.post('/login', loginMember);
app.post('/signup', signUpMember);
app.post('/member', auth, updateMemberDetails);
app.post('/newEvent', addEventMember);
app.get('/member', auth, getMemberDetail);

exports.api = functions.https.onRequest(app);