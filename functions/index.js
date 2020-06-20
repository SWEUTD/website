const functions = require('firebase-functions');
const nodemailer = require('nodemailer')
const cors = require('cors')
const gmailEmail = functions.config().gmail.email
const gmailPassword = functions.config().gmail.password
const app = require('express')();
const auth = require('./util/auth');
const { db } = require('./util/admin');
app.use(cors({ origin: true }));

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

const mailTransport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: gmailEmail,
      pass: gmailPassword,
    },
  })
  
  exports.submit = functions.https.onRequest((req, res) => {
    res.set('Access-Control-Allow-Origin', '*')
    res.set('Access-Control-Allow-Methods', 'GET, PUT, POST, OPTIONS')
    res.set('Access-Control-Allow-Headers', '*')
  
    if (req.method === 'OPTIONS') {
      res.end()
    } else {
        if (req.method !== 'POST') {
          return
        }
  
        const mailOptions = {
          from: req.body.email,
          replyTo: req.body.email,
          to: gmailEmail,
          subject: `Website Contact Form: ${req.body.subject}`,
          text: req.body.message,
          html: `<p>Name: ${req.body.name}</p><p>Email: ${req.body.email}</p><p>Message: ${req.body.message}</p>`,
        }
        return mailTransport.sendMail(mailOptions).then(() => {
          console.log('New email sent to:', gmailEmail)
          res.status(200).send({
            isEmailSend: true
          })
          return
        })
    }
  })