import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDQKpxOClP3kqgy2XzUWutHnfTJ06BhWPc",
    authDomain: "twatter-245ef.firebaseapp.com",
    databaseURL: "https://twatter-245ef-default-rtdb.firebaseio.com",
    projectId: "twatter-245ef",
    storageBucket: "twatter-245ef.appspot.com",
    messagingSenderId: "634091791945",
    appId: "1:634091791945:web:e39cf0aa36504142a14198"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;