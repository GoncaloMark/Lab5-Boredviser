import {Container} from "../styles/ContainerStyles";
import {ButtonC} from "../styles/ButtonStyles";
import {Image} from "../styles/ImageStyles";
import ImagemLandingPage from "../../Images/ImagemLandingPage.png";
import {Footer} from "../Footer/Footer";
import React from "react";
import {Link} from "react-router-dom";

function LandingPage()
{
    return(
        <div>
        <Container>
        <div>
            <h2>Get started! Don't get bored!</h2>
            <p>Engage in genuine activities, here at Boredviser we are ready to connect you to the most suitable activities, personalized just for you!</p>
            <Link to='/LogIn'><ButtonC top={"3rem"}>Get Started!</ButtonC></Link>
        </div>
        <Image src={ImagemLandingPage}/>
    </Container>
    <Footer/>
        </div>
    )
}

export default LandingPage