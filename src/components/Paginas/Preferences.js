import React from "react";
import {useParams} from "react-router-dom";

function Preferences() {
    const {uid} = useParams()

    if(uid)
    {
        return(<p>User ID: {uid}</p>)
    }

}

export default Preferences