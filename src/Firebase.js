import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA3hhutH7vC8P2WB41tc44Jfgke-oGgMDs",
    authDomain: "fir-ed83b.firebaseapp.com",
    databaseURL: "https://fir-ed83b.firebaseio.com",
    projectId: "fir-ed83b",
    storageBucket: "fir-ed83b.appspot.com",
    messagingSenderId: "952711060366",
    appId: "1:952711060366:web:e62b6b5d8d61ab14c2e2df",
    measurementId: "G-LV2EF1SCLS"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
