import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCL2DW_XMmziTfqffdtcuU9QY3F047Wedg",
    authDomain: "app-signify.firebaseapp.com",
    databaseURL: "https://app-signify-default-rtdb.firebaseio.com",
    projectId: "app-signify",
    storageBucket: "app-signify.appspot.com",
    messagingSenderId: "144281610498",
    appId: "1:144281610498:web:86943f826318d7552b7a1b",
    measurementId: "G-2Q2RNRGNWL"
  };

let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else{
  app = firebase.app()
}
const db = app.firestore();
const auth = firebase.auth;
const firebaseapp = firebase.app();
const userCurrent = auth().currentUser
export { db,auth , userCurrent};

// rules_version = '2';
// service firebase.storage {
//   match /b/{bucket}/o {
//     match /{allPaths=**} {
//       allow read, write: if request.auth != null;
//     }
//   }
// }

// service firebase.storage {
//   match /b/{bucket}/o {
//     match /{allPaths=**} {
//       allow read, write: if request.auth == null;
//     }
//   }
// }