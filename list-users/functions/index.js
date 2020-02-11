
// // Create and Deploy Your First Cloud Functions// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
const functions = require('firebase-functions');
const admin = require('firebase-admin');

var serviceAccount = require("serviceAccountKey.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://bsse9-1b472.firebaseio.com"
});

const auth = admin.auth();

/**
 * Gets all the users (1000 MAX) from Firebase auth.
 *
 * @param {Object} req Express Request Object.
 * @param {Object} res Express Response Object
 */
const getAllUsers = (req, res) => {
  const maxResults = 1000; // optional arg.
  var useremail;
  var emails = {
      'email':['one@gmail.com']
  }
  auth.listUsers(maxResults).then((userRecords) => {
    userRecords.users.forEach((user) => {
        useremail=user.email;
        emails['email'].push(useremail);
    });
    res.end(JSON.stringify(emails));
  }).catch((error) => console.log(error));
};

module.exports = {
  api: functions.https.onRequest(getAllUsers),
};