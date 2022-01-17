import {Link} from "react-router-dom";
import {ContainerRegister} from "../styles/ContainerStyles";
import {ButtonC} from "../styles/ButtonStyles";
import {Footer} from "../Footer/Footer";
import React, {useState} from "react";
import {Input, Label} from "../styles/ResgisterStyles";
import {auth} from "../../Firebase/Firebase";
import {createUserWithEmailAndPassword, onAuthStateChanged, signOut} from "firebase/auth";

function LogIn() {
    const[Email, SetEmail] = useState('')
    const[Pass, SetPass] = useState('')

    const Register = async (e) => {
        e.preventDefault()
        try{
            const user = await createUserWithEmailAndPassword(auth, Email, Pass)
            console.log(user)

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
                        <Input type="email" placeholder="smthn@mail.com" value={Email} onChange={(e) =>{SetEmail(e.target.value)}}/>
                        <Label>Password</Label>
                        <Input type="password" value={Pass} onChange={(e) =>{SetPass(e.target.value)}}/>
                        <Link to='/Preferences'><ButtonC margin={"0"} right={"1rem"}>Login</ButtonC></Link>
                        <p>If you don't have an account click <Link to='/SignUp'><span onClick={Register}>here</span></Link></p>

                    </div>
                </ContainerRegister>
                <Footer/>
            </div>
        )
}


export default LogIn