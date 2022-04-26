import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

const firebaseConfig = {
    apiKey: "AIzaSyC6bbnPEDYbAC81z_xaGz-OhNEu2B1RMss",
    authDomain: "react-crud-6866b.firebaseapp.com",
    databaseURL: "https://react-crud-6866b-default-rtdb.firebaseio.com",
    projectId: "react-crud-6866b",
    storageBucket: "react-crud-6866b.appspot.com",
    messagingSenderId: "781229109761",
    appId: "1:781229109761:web:cee684eafa3ddf2af94600"
  };

  // Initialize Firebase
  const fireDb = firebase.initializeApp(firebaseConfig);
  export default fireDb.database().ref();