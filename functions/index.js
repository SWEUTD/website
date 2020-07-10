// index.js

// code for setting up the firebase API

const functions = require('firebase-functions');
const cors = require('cors')
const app = require('express')();
const auth = require('./util/auth');
app.use(cors({ origin: true }));

const { 
    loginMember,
    signUpMember,
    getMemberDetail,
    updateMemberDetails,
    addEventMember,
} = require('./APIs/members')

// Connects API routes to functions in the member.js file
app.post('/login', loginMember);
app.post('/signup', signUpMember);
app.post('/member', auth, updateMemberDetails);
app.post('/newEvent', addEventMember);
app.get('/member', auth, getMemberDetail);

exports.api = functions.https.onRequest(app);

// code for the email contact form:

// created with help from the article: https://medium.com/better-programming/a-simple-and-easy-contact-form-step-by-step-tutorial-react-js-1532bc025980

const nodemailer = require('nodemailer')
const gmailEmail = functions.config().gmail.email // must be set in terminal
const gmailPassword = functions.config().gmail.password // must be set in terminal

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


  require('dotenv').config();
  const bodyParser = require('body-parser');
  const { Storage } = require('@google-cloud/storage');
  const multer = require('multer');
  //const port = process.env.API_PORT || 8080;
  
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  
  // Create new storage instance with Firebase project credentials
  const storage = new Storage({
    projectId: process.env.GCLOUD_PROJECT_ID,
    keyFilename: process.env.GCLOUD_APPLICATION_CREDENTIALS,
  });
  
  // Create a bucket associated to Firebase storage bucket
  const bucket = storage.bucket(process.env.GCLOUD_STORAGE_BUCKET_URL);
  
  // Initiating a memory storage engine to store files as Buffer objects
  const uploader = multer({
    storage: multer.memoryStorage(),
    limits: {
      fileSize: 5 * 1024 * 1024, // limiting files size to 5 MB
    },
  });
  
  // Upload endpoint to send file to Firebase storage bucket
  exports.upload = (uploader.single('file'), functions.https.onRequest((req, res, next) => {
    try {
      if (!req.file) {
        res.status(400).send('Error, could not upload file');
        return;
      }
  
      // Create new blob in the bucket referencing the file
      const blob = bucket.file(req.file.originalname);
  
      // Create writable stream and specifying file mimetype
      const blobWriter = blob.createWriteStream({
        metadata: {
          contentType: req.file.mimetype,
        },
      });
  
      blobWriter.on('error', (err) => next(err));
  
      blobWriter.on('finish', () => {
        // Assembling public URL for accessing the file via HTTP
        const publicUrl = `https://firebasestorage.googleapis.com/v0/b/${
          bucket.name
        }/o/${encodeURI(blob.name)}?alt=media`;
  
        // Return the file name and its public URL
        res
          .status(200)
          .send({ fileName: req.file.originalname, fileLocation: publicUrl });
      });
  
      // When there is no more data to be consumed from the stream
      blobWriter.end(req.file.buffer);
    } catch (error) {
      res.status(400).send(`Error, could not upload file: ${error}`);
      return;
    }
  }));