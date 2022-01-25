import { Container } from "../styles/ContainerStyles";
import ua_logo from "../../Images/ua_logo.png";
import { Footer } from "../Footer/Footer";
import {ImageAbout} from "../styles/ImageStyles";

function AboutUs ({User})
{
    return(
    <div>

<Container>
    <div>
        <h2>About Us</h2>
        <p>This website was created by two students from the University of Aveiro, within the scope of the Multimedia Laboratory 5 discipline.</p>
        <p>The objective of this work was to create a website, based on react, integrating two API's.</p>
        <p>We hope you like our content! Have fun!</p>
        <br></br>
        <br></br>
        <br></br>
        <p style={{"font-weight": "600"}}>Gonçalo & Henrique</p>
    </div>
    <ImageAbout src={ua_logo}/>
</Container>
<Footer />

    </div> )
}

export default AboutUs