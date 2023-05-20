import firebase from 'firebase/app';
import 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyD2ulTPJWFV4WqIK9qO2B9eAgYcP9ndLSA",
    authDomain: "discord-1-6b48b.firebaseapp.com",
    projectId: "discord-1-6b48b",
    storageBucket: "discord-1-6b48b.appspot.com",
    messagingSenderId: "348030329480",
    appId: "1:348030329480:web:f69c925f2540feeed7753d",
    measurementId: "G-TXSQPRX486"
  };

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();