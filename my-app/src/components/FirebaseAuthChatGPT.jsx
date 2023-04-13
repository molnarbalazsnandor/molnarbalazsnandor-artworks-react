/* // Initialize Firebase
var config = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  databaseURL: "YOUR_DATABASE_URL",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_SENDER_ID"
};
firebase.initializeApp(config);

// Get a reference to the authentication service
var auth = firebase.auth();

// Sign in with email and password
auth.signInWithEmailAndPassword(email, password)
  .then(function(user) {
      // User signed in successfully.
  })
  .catch(function(error) {
      // Handle errors here.
  });

// Sign up with email and password
auth.createUserWithEmailAndPassword(email, password)
  .then(function(user) {
      // User signed up successfully.
  })
  .catch(function(error) {
      // Handle errors here.
  });
 */