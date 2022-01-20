import React from "react";
import {useParams} from "react-router-dom";
import {Container} from "../styles/ContainerStyles";
import {ButtonC} from "../styles/ButtonStyles";
import {Footer} from "../Footer/Footer";
import Rei from "../PreferenceList/PrefList";

function Preferences() {
    const {uid} = useParams()

    if(uid)
    {
        return(<div><p>User ID: {uid}</p>
            
        <div style={{'display': 'flex','justify-content':'center'}}><Rei /></div>
        <Container style={{'justify-content':'center'}}>
            <div style={{'margin':'auto' , 'padding':'0px'}}>
                
                <ButtonC>Generate Activities</ButtonC>
            </div>
        </Container>
        <Footer />
    </div>)
    }

}

export default Preferences