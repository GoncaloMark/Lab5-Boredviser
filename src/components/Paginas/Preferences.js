import React from 'react'
import {useParams} from "react-router-dom";
import {Footer} from "../Footer/Footer";
import Rei from "../PreferenceList/PrefList";

function Preferences() {

    const {uid} = useParams()

    if(uid)
    {
        return(<div>
        <div style={{'display': 'flex','justify-content':'center'}}>
            <Rei/>
        </div>
        <Footer />
    </div>)
    }

}

export default Preferences