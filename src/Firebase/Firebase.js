// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
// https://firebase.google.com/docs/web/setup#available-libraries
import{useState, useEffect} from "react";
import {getStorage, ref, uploadBytes, getDownloadURL} from "firebase/storage"
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'


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
export const DB = getFirestore(app)

export function useAuth()
{
    const[currentUser, SetcurrentUser] = useState(null)
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => SetcurrentUser(user));
        return unsubscribe}, [])

    return currentUser
}

export async function register(Email, Pass)
{
    return createUserWithEmailAndPassword(auth, Email, Pass)
}

export async function login(Email, Pass)
{
    return signInWithEmailAndPassword(auth, Email, Pass)
}

export async function logout()
{
    return signOut(auth)
}

export const uploadFiles = async (file, currentUser, setLoading) => {
    if (!file) return;

    const storageRef = ref(storage, currentUser.uid + `profile`)
    setLoading(true)
    const snapshot = await uploadBytes(storageRef, file)
    setLoading(false)

    alert('File Uploaded!')
}

export const DownloadFiles = async (currentUser, setPhoto) => {
    await getDownloadURL(ref(storage, currentUser.uid + 'profile'))
        .then((url) => {
            console.log(currentUser)
            console.log(url)
            const xhr = new XMLHttpRequest();
            xhr.responseType = 'blob';
            xhr.onload = (event) => {

                console.log('ola')
                const blob = xhr.response;
            };
            xhr.open('GET', url);
            xhr.send();

            setPhoto(url)
        })
}



