// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCXsanzJLyDMnQX8wioPqE3tMApSw6RgXM",
    authDomain: "farmacia-dl.firebaseapp.com",
    projectId: "farmacia-dl",
    storageBucket: "farmacia-dl.appspot.com",
    messagingSenderId: "1086304394567",
    appId: "1:1086304394567:web:7c2f75da4a755fd4844062"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const $db = getFirestore(app);

export { $db }