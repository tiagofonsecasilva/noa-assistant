import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDqSDrvS4InjwehiQsHOkSqW_gq_3NrRqo",
    authDomain: "noa-assistant.firebaseapp.com",
    databaseURL: "https://noa-assistant-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "noa-assistant",
    storageBucket: "noa-assistant.appspot.com",
    messagingSenderId: "204626404022",
    appId: "1:204626404022:web:b91d808e02cca69ea8bc17",
    measurementId: "G-Z16956EKLG"
  };
  
  firebase.initializeApp(firebaseConfig)
  
  export const db = firebase.firestore()