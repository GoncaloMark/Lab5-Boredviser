import {ContainerRegister} from "../styles/ContainerStyles";
import {ButtonC} from "../styles/ButtonStyles";
import {Footer} from "../Footer/Footer";
import React, {useState} from "react";
import {Input, Label} from "../styles/ResgisterStyles";
import {useNavigate} from "react-router-dom";
import {register, login} from "../../Firebase/Firebase";

export function UseStorage(x='', y='')
{
    window.sessionStorage.setItem(x, y)
}

export function Registo() {

    const navigate = useNavigate()

    const [Email, SetEmail] = useState('')
    const [Pass, SetPass] = useState('')

            return(

                <div>
                    <ContainerRegister>
                        <div>
                            <h2>Login Page</h2>
                            <Label>Email</Label>
                            <Input type="email" placeholder="smthn@mail.com" autocomplete="email" required value={Email} onChange={e => SetEmail(e.target.value.trim())}/>
                            <Label>Password</Label>
                            <Input type="password" required value={Pass} onChange={e => SetPass(e.target.value)}/>
                            <ButtonC onClick={async e => {
                                e.preventDefault()
                                await login(Email, Pass)
                                    .then ((response) => {alert('Successfully Logged In'); UseStorage('userLogged', response.user.uid); navigate('/Preferences/' + response.user.uid);})
                                    .catch((error) => alert(error.message))
                            }} margin={"0"} right={"1rem"}>Login</ButtonC>
                            <p>If you don't have an account click <span onClick={async e => {
                                e.preventDefault()
                                     await register(Email, Pass)
                                    .then(async (response) => {alert('Successfully Registered'); console.log(response); UseStorage('userLogged', response.user.uid); navigate('/Profile/')})
                                    .catch((error) => alert(error.message))
                            }}>here</span></p>
                        </div>
                    </ContainerRegister>
                    <Footer/>
                </div>

            )
}


