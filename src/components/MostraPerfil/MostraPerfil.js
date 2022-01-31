import React, {useContext, useState} from "react";
import { NavLog } from "../styles/ImageStyles";
import {DB, useAuth} from "../../Firebase/Firebase";
import {doc, getDoc} from "firebase/firestore";
import Profilecontext from "../../ProfileContext";

function MostraPerfil() {

    const currentUser = useAuth()
    const [Data, setUserData] = useState({})
    const [C, setC] = useState(0)

    const {verify2, setVerify2} = useContext(Profilecontext)

    console.log(C)

    if(C === 0 && verify2 === false) {

        const getDB = async (currentUser, setUserData) =>
        {
            const docRef = doc(DB, "Profiles", currentUser.uid);
            const docSnap = await getDoc(docRef);

            await setUserData({data: docSnap.data()})
        }

        getDB(currentUser, setUserData).then(() => {setC(1); setVerify2(true)})

        console.log(Data)

        return(<div> </div>)

    }else {
        return (
        <div>
            <NavLog src={Data.data.photo}/>
            <span style={{ "float": "right", "color": "white", "margin-top": "1rem", "margin-left": ".5rem" }}>{Data.data.name}</span>
        </div>
    )
    }
}

export default MostraPerfil