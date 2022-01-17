// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
// https://firebase.google.com/docs/web/setup#available-libraries
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged} from "firebase/auth";
import {useEffect, useState} from "react"

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
const auth = getAuth(app)

export function signup(email, password)
{
    return createUserWithEmailAndPassword(auth, email, password)
}

export function UseAuth()
{
    const [currentUser, setCurrentUser] = useState()

    useEffect(() => {
        return onAuthStateChanged(auth, user => setCurrentUser(user))} , [])

    return currentUser
}