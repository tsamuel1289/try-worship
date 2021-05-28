
import firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCai6YiHJ7XH0fIxO7JGHhOtdBmMSNnR40",
    authDomain: "try-worship.firebaseapp.com",
    projectId: "try-worship",
    storageBucket: "try-worship.appspot.com",
    messagingSenderId: "126809631199",
    appId: "1:126809631199:web:cd0afc3ad62f118dcdfc6a"
  };
  // Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);
export const db = fb.firestore()