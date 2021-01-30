import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBi3AR28cYqBlPdewOAyFa_T99IGC84gDs",
    authDomain: "imessage-clone-dbb1a.firebaseapp.com",
    projectId: "imessage-clone-dbb1a",
    storageBucket: "imessage-clone-dbb1a.appspot.com",
    messagingSenderId: "725800971850",
    appId: "1:725800971850:web:ab92be94ccf783359fc0b3",
    measurementId: "G-M5B3KWTRSR"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {provider,auth};
export default db;