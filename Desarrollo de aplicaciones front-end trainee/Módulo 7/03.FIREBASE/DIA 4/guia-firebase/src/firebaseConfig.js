// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC9hORhXJoXPTq8kTiCk_vHMiFg0YrIJtM",
    authDomain: "crud-productos-1be70.firebaseapp.com",
    projectId: "crud-productos-1be70",
    storageBucket: "crud-productos-1be70.appspot.com",
    messagingSenderId: "530582070542",
    appId: "1:530582070542:web:a7df7e98c5bd1c484ca35f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const $db = getFirestore(app);
const $auth = getAuth(app);

export { $db, $auth }
