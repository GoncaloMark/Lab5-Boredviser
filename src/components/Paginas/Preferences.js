import React from "react";
import { Footer } from "../Footer/Footer";
import { Container } from "../styles/ContainerStyles";
import { ButtonC } from "../styles/ButtonStyles"
import Rei from "../PreferenceList/PrefList";


function Preferences()
{
    return(<div>
        <div style={{'display': 'flex','justify-content':'center'}}><Rei /></div>
        <Container style={{'justify-content':'center'}}>
            <div style={{'margin':'auto' , 'padding':'0px'}}>
                
                <ButtonC>Generate Activities</ButtonC>
            </div>
        </Container>
        <Footer />
    </div> )
}

export default Preferences