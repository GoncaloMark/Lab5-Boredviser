import { ContainerRegister } from "../styles/ContainerStyles";
import { ButtonCR } from "../styles/ButtonStyles";
import { Footer } from "../Footer/Footer";
import React, { useState } from "react";
import { Input, Label } from "../styles/ResgisterStyles";
import { useNavigate } from "react-router-dom";
import { register, login } from "../../Firebase/Firebase";
import { FaLock, FaSignInAlt, FaUser } from "react-icons/fa";

export function UseStorage(x = '', y = '') {
    window.sessionStorage.setItem(x, y)
}

export function Registo() {

    const navigate = useNavigate()

    const [Email, SetEmail] = useState('')
    const [Pass, SetPass] = useState('')

    return (

        <div>
            <ContainerRegister>
                <div>
                    <h2>Login  <FaSignInAlt style={{ 'marginBottom': '-5px' }} /></h2>
                    <Label>E-Mail <FaUser /></Label>
                    <Input type="email" placeholder="smthn@mail.com" autocomplete="email" required value={Email} onChange={e => { SetEmail(e.target.value.trim()) }} />
                    <Label>Password <FaLock /></Label>
                    <Input type="password" required value={Pass} onChange={e => SetPass(e.target.value)} />
                    <ButtonCR onClick={async e => {
                        e.preventDefault()
                        await login(Email, Pass)
                            .then((response) => { alert('Successfully Logged In'); UseStorage('userLogged', response.user.uid); navigate('/Preferences/' + response.user.uid); })
                            .catch((error) => alert(error.message))
                    }} margin={"0"} right={"1rem"}>Login</ButtonCR>
                    <div><p>If you don't have an account click <span onClick={async e => {
                        e.preventDefault()
                        await register(Email, Pass)
                            .then(async (response) => { alert('Successfully Registered'); UseStorage('userLogged', response.user.uid); navigate('/Profile/') })
                            .catch((error) => alert(error.message))
                    }}>here</span></p></div>
                </div>
            </ContainerRegister>
            <Footer />
        </div>

    )
}


