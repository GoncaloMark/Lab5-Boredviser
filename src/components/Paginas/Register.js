import {Link} from "react-router-dom";
import {ContainerRegister} from "../styles/ContainerStyles";
import {ButtonC} from "../styles/ButtonStyles";
import {Image} from "../styles/ImageStyles";
import ImagemLandingPage from "../../Images/ImagemLandingPage.png";
import {Footer} from "../Footer/Footer";
import React from "react";
import {Input, Label} from "../styles/ResgisterStyles";

function Register()
{
    return(
        <div>
            <ContainerRegister>
                <div>
                    <Label>Email</Label>
                    <Input type="email"/>
                    <Label>Password</Label>
                    <Input type="password"/>
                    <Label>Username</Label>
                    <Input type="text"/>
                    <Link to='/Preferences'><ButtonC top={"5rem"}>Sign Up</ButtonC></Link>
                    <Link to='/'><ButtonC margin={".5rem"} right={"1rem"}>Login</ButtonC></Link>
                </div>
            </ContainerRegister>
            <Footer/>
        </div>
    )

}

export default Register