import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
    //ITS PROTECTED
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
const database = firebase.database()
export { db,auth , userCurrent , database};

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
