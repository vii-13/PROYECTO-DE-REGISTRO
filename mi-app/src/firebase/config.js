import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBFMKGV7xFyh-NcE--H0B1gApgORjw5n7g",
    authDomain: "asistencia-77843.firebaseapp.com",
    projectId: "asistencia-77843",
    storageBucket: "asistencia-77843.appspot.com",
    messagingSenderId: "959756100653",
    appId: "1:959756100653:web:9cbb5441843166a009c4a4",
    measurementId: "G-QDM2GY6PYX"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  console.log('firebase congigurado')

  export default firebase.firestore();