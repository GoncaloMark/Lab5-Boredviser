// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from "firebase/auth";
import {getStorage} from "firebase/storage"

// Your web app's Firebase configuration
const firebaseConfig = {

    apiKey: "AIzaSyBhGVwg9atkM5BuKRSYg0PXMUmwO1Qklow",

    authDomain: "boredviser.firebaseapp.com",

    projectId: "boredviser",

    storageBucket: "boredviser.appspot.com",

    messagingSenderId: "493983826163",

    appId: "1:493983826163:web:0ef966852c72f4efcef786"

};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const storage = getStorage(app)



