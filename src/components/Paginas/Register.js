import {ContainerRegister} from "../styles/ContainerStyles";
import { useNavigate } from "react-router-dom";
import {ButtonC} from "../styles/ButtonStyles";
import {Footer} from "../Footer/Footer";
import React, {useState} from "react";
import {Input, Label} from "../styles/ResgisterStyles";
import {auth} from "../../Firebase/Firebase";
import {createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword} from "firebase/auth";

function LogIn() {
    const[Email, SetEmail] = useState('')
    const[Pass, SetPass] = useState('')
    const[User, SetUser] = useState({})
    const navigate = useNavigate()

    onAuthStateChanged(auth, (currentUser) => {SetUser(currentUser)})

    const Register = async (e) => {
        e.preventDefault()
        try{
            const user = await createUserWithEmailAndPassword(auth, Email, Pass)
            alert("Created Account Successfully!")
            navigate("/Preferences")
        } catch (error)
        {
            alert(error.message)
        }
    }

    const LogIn = async (e) => {
        e.preventDefault()
        try{
            const user = await signInWithEmailAndPassword(auth, Email, Pass)
            if(user){
                navigate("/Preferences")
            }

        } catch (error)
        {
            alert(error.message)
        }
    }

    const LogOut = async (e) => {
        e.preventDefault()
        await signOut(auth);
    }
        return(
            <div>
                <ContainerRegister>
                    <div>
                        <h2>Login Page</h2>
                        <Label>Email</Label>
                        <Input type="email" placeholder="smthn@mail.com" value={Email} onChange={(e) => {SetEmail(e.target.value)}}/>
                        <Label>Password</Label>
                        <Input type="password" value={Pass} onChange={(e) => {SetPass(e.target.value)}}/>
                        <ButtonC onClick={LogIn} margin={"0"} right={"1rem"}>Login</ButtonC>
                        <p>If you don't have an account click <span onClick={Register}>here</span></p>
                    </div>
                </ContainerRegister>
                <Footer/>
            </div>
        )
}

export default LogIn