import firebase from "firebase/app";
import 'firebase/firestore';


const firebaseConfig = firebase.initializeApp({

    apiKey: "AIzaSyAu4GHj4zufSQo3_TWVlnmfgJJWpitAq3o",
    authDomain: "todoapp-9ac65.firebaseapp.com",
    databaseURL: "https://todoapp-9ac65-default-rtdb.firebaseio.com",
    projectId: "todoapp-9ac65",
    storageBucket: "todoapp-9ac65.appspot.com",
    messagingSenderId: "910894806866",
    appId: "1:910894806866:web:e9f3bc42fc0b1d135a2c8b"
});

export {firebaseConfig as firebase}

 