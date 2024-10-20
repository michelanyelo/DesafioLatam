// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBWO8tbz-1nN36qMGLxGH3IWBNNXHh0baQ",
    authDomain: "crudcolaboradores.firebaseapp.com",
    projectId: "crudcolaboradores",
    storageBucket: "crudcolaboradores.appspot.com",
    messagingSenderId: "216069688105",
    appId: "1:216069688105:web:1cdcd1eca5ebb502d78538"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app