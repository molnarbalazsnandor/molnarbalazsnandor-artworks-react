import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC-Z2He-U_v79Mnnzw_vQ_p1gy0cks69DU",
  authDomain: "mbn-harvard-art-museums.firebaseapp.com",
  projectId: "mbn-harvard-art-museums",
  storageBucket: "mbn-harvard-art-museums.appspot.com",
  messagingSenderId: "610841695111",
  appId: "1:610841695111:web:527d1da289d6b0e673f922",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

/* import firebase from "firebase/compat/app";
import "firebase/compat/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-Z2He-U_v79Mnnzw_vQ_p1gy0cks69DU",
  authDomain: "mbn-harvard-art-museums.firebaseapp.com",
  projectId: "mbn-harvard-art-museums",
  storageBucket: "mbn-harvard-art-museums.appspot.com",
  messagingSenderId: "610841695111",
  appId: "1:610841695111:web:527d1da289d6b0e673f922",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = () => {
  firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const handleSignOutButton = () => {
  auth.setPersistence(firebase.auth.Auth.Persistence.NONE);
  auth
    .signOut()
    .then(() => {
      console.log("Signed out successfully!");
    })
    .catch((error) => {
      console.log(error);
    });
}; */
