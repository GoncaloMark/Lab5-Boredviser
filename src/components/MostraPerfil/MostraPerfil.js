import React from "react";
import { NavLog } from "../styles/ImageStyles";

function MostraPerfil() {
    const Data = localStorage.getItem('User')
    const fly = JSON.parse(Data)

    return (
        <div>
            <NavLog src={fly.photo} />
            <span style={{ "float": "right", "color": "white", "margin-top": "1rem", "margin-left": ".5rem" }}>{fly.name}</span>
        </div>
    )

}

export default MostraPerfil