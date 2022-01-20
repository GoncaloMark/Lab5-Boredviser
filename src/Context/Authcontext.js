import {createContext, useEffect, useState, useContext} from 'react'
import {auth} from '../Firebase/Firebase'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut} from 'firebase/auth'

const AuthContext = createContext({
    currentUser: null,
    register: () => Promise,
    login: () => Promise,
    logout: () => Promise,
})

export const useAuth = () => useContext(AuthContext)

async function register(Email, Pass)
{
    return createUserWithEmailAndPassword(auth, Email, Pass)
}

async function login(Email, Pass)
{
    return signInWithEmailAndPassword(auth, Email, Pass)
}

async function logout()
{
    return signOut(auth)
}


export default function AuthContextProvider({children}) {
    const [currentUser, setcurrentUser] = useState(null)

    useEffect(() => {const unsubscribe = onAuthStateChanged(auth, user => {setcurrentUser(user)})
        return () => {unsubscribe()}}, [])
    const value = {
        currentUser,
        register,
        login,
        logout,
    }

    return <AuthContext.Provider value={value}> {children} </AuthContext.Provider>

}