# SWE UTD Website

**Frontend developed with [ReactJS](https://reactjs.org/), [MaterialUI](https://material-ui.com/), and [React Bootstrap](https://react-bootstrap.github.io/)**

**Backend developed with [NodeJS](https://nodejs.org/en/), [ExpressJS](https://expressjs.com/), and [Firebase](https://firebase.google.com/)**

Here are the instructions for installing and setting up the SWE website for development purposes.

SWE officers working on the website, you will likely only need to follow the frontend instructions to make the majority of changes to the website. You only need to set up the backend functions if you are making changes to the SWE Portal API.

Reach out to Cady if you are trying to work on the website and need help! I also have the API keys/config files.

## Frontend Setup:

 - 'cd view'
 - 'npm install'
 - 'npm start' to run website locally on localhost:3000
 - To deploy changes to GitHub Pages (live version), use 'npm run deploy'

## Backend Setup:

 - 'cd functions'
 - 'npm install'
 - Add configuration file
	 - In the Project Settings > General section on Firebase, copy the Firebase SDK snippet (Config version). Paste this into a file called config.js in the functions > util directory.
 - Login to the Firebase Google account locally:
	 - Use the command: 'firebase login'

**To test locally:**

 - 'firebase serve' from the root folder to run the API on localhost:5000
 - Send test requests to: localhost:5000/swe-utd/us-central1/api/
 - You will also need a key to run this locally:
	- Go to Project Settings on Firebase Console
	- Go to service accounts
	- Generate a new key and download the JSON file
	- Use this command in your command line session: 'export GOOGLE_APPLICATION_CREDENTIALS="path to the JSON file you downloaded"'

**To send updated functions to live backend:**
- 'firebase deploy' from the root folder

**If you need to setup a new Firebase database from scratch:**

*Note: SWE Officers, you should not have to do this! You can access the Firebase database with the SWE Google Account. I kept track of the entire setup and am documenting it just in case.*

- Go to Firebase Console
- Add Project
- Go to the functions tab and click 'Get Started'
- Install firebase tools on your machine: 'npm install -g firebase-tools'
- Use the command 'firebase init'
	- Options:
		- Configure and deploy Cloud Functions
		- Use an existing project
		- Find the project you created and select it
		- Choose JavaScript as the language
		- Do not overwrite existing functions directory/index.js/index.html
- If you use a new Firebase database with the view project, you will need to update the 'proxy' attribute in the view's package.json with the new location of the API
- Go to Console > Database, and start a new Firestore database
- Click 'Start Collection' and create a new collection called members
- Create the first member entry with the necessary fields (First Name, Last Name, Classification, NetID, Major, Phone Number, Email Address)
	- Note: the first time you try to access a new collection via an HTTP request, you will see error code 9 logged in your console, along with a link. Go to this URL and click on 'Create index.'
	- To setup User Authentication:
		- Go to Firebase console > Authentication
		- Click "Set up sign-in method" button and enable Email/Password
- Go to Project Settings > General
- Choose a web app and name it
- Now, you can get the config.js information from the Firebase SD snippet (described in setup earlier)


