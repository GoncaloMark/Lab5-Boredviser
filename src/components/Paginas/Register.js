import {Link} from "react-router-dom";
import {ContainerRegister} from "../styles/ContainerStyles";
import {ButtonC} from "../styles/ButtonStyles";
import {Footer} from "../Footer/Footer";
import React from "react";
import {Input, Label} from "../styles/ResgisterStyles";
import {signup, UseAuth} from "../../Firebase/Firebase";
import {useRef, useState} from "react"

function Register() {
    const [Loading, SetLoading] = useState(false)
    const emailref = useRef()
    const passref = useRef()
    const currentUser = UseAuth()

    async function handleSignUp() {

        SetLoading(true)
        try {
            await signup(emailref.current.value, passref.current.value)
        } catch {
            alert("erro")
        }
        SetLoading(false)
    }
        return(
            <div>
                <ContainerRegister>
                    <div>
                        <Label>Email</Label>
                        <Input type="email" ref={emailref} placeholder="smthn@mail.com"/>
                        <Label>Password</Label>
                        <Input type="password" ref={passref}/>
                        <Link to='/Preferences'><ButtonC top={"1rem"} disable={Loading || currentUser != null} onClick={handleSignUp}>Sign Up</ButtonC></Link>
                        <Link to='/Preferences'><ButtonC margin={".5rem"} right={"1rem"}>Login</ButtonC></Link>
                    </div>
                </ContainerRegister>
                <Footer/>
            </div>
        )
}


export default Register