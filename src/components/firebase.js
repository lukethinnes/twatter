import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAkN0E934rPiSR8fztaCA4WanA6DCDjlCM",
    authDomain: "twatter-16a87.firebaseapp.com",
    databaseURL: "https://twatter-16a87.firenaseio.com",
    projectId: "twatter-16a87",
    storageBucket: "twatter-16a87.appspot.com",
    messagingSenderId: "471987044092",
    appId: "1:471987044092:web:3f13fa5532dbf5a207e179",
    measurementId: "G-859Q14JTQF"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;