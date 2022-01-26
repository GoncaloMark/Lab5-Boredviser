import {Container} from "../styles/ContainerStyles";
import {ButtonC} from "../styles/ButtonStyles";
import {Image} from "../styles/ImageStyles";
import ImagemLandingPage from "../../Images/ImagemLandingPage.png";
import {Footer} from "../Footer/Footer";
import React from 'react'
import {Link} from "react-router-dom";
import {useGetStorage, useVerify} from "../Navbar/Navbar";

function LandingPage()
{
    const G = useGetStorage('userLogged')
    const V = useVerify('userLogged')

    return(
        <div>
        <Container>
        <div>
            <h2>Get started! Don't get bored!</h2>
            <p>Engage in genuine activities, here at Boredviser we are ready to connect you to the most suitable activities, personalized just for you!</p>
            {!V && <Link to='/LogIn'><ButtonC top={"3rem"}>Get Started!</ButtonC></Link>}
            {V && <Link to={'/Preferences/' + G}><ButtonC top={"3rem"}>Get Started!</ButtonC></Link>}
        </div>
        <Image src={ImagemLandingPage}/>
    </Container>
    <Footer/>
        </div>
    )
}

export default LandingPage