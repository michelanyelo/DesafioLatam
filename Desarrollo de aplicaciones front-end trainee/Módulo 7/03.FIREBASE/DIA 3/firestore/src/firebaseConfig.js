// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCHcEbAd4Q38-Nx72MpT7UW3MKnK9Jowas",
    authDomain: "fir-auth-dfb98.firebaseapp.com",
    projectId: "fir-auth-dfb98",
    storageBucket: "fir-auth-dfb98.appspot.com",
    messagingSenderId: "689794338023",
    appId: "1:689794338023:web:6793dfa65870a199e02642"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const $db = getFirestore(app)
const $auth = getAuth(app)

export { $auth, $db }