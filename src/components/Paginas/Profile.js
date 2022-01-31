import React, {useContext, useState} from "react";
import { ContainerP, Perfil } from "../styles/ContainerStyles";
import { Footer } from "../Footer/Footer";
import { ProfileStyle } from "../styles/ImageStyles";
import { uploadFiles, useAuth, DownloadFiles} from "../../Firebase/Firebase";
import { ButtonC } from "../styles/ButtonStyles";
import { InputPerfil } from "../styles/ProfileStyles";
import { collection, setDoc, doc } from "firebase/firestore"
import { DB } from "../../Firebase/Firebase"
import { useNavigate } from "react-router-dom";
import Profilecontext from "../../ProfileContext";

function Profile() {
    const [file, setFile] = useState(null)
    const [loading, setLoading] = useState(false)
    const [photo, setPhoto] = useState('https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1024px-Circle-icons-profile.svg.png')
    const currentUser = useAuth()
    const [age, setAge] = useState(0)
    const [name, setName] = useState('')
    const usersCollectionRef = collection(DB, "Profiles")
    const navigate = useNavigate()

    const {setVerify, setVerify2} = useContext(Profilecontext)

    const SendDB = async (currentUser) => {
        await setDoc(doc(usersCollectionRef, currentUser.uid), {
            name: name, age: age, photo: photo
        });
    }

    const HandleChange = (e) => {
        e.preventDefault();
        if (e.target.files[0]) setFile(e.target.files[0])
    }

    const HandleClick = async (e) => {
        e.preventDefault()
        uploadFiles(file, currentUser, setLoading);

        DownloadFiles(currentUser, setPhoto).then(() => {})

        setFile(null)
    }

    const HandleClick2 = (e) => {
        e.preventDefault()
        SendDB(currentUser)

        setVerify2(false)
        setVerify(false)
    }

    const HandleClick3 = (e) => {
        e.preventDefault()
        setVerify(true)
        alert('Submitted!')
    }

    return (
        <div>
            <ContainerP>
                <div>
                    <h2>Set up you Profile Page!</h2>

                    <h4>Submit A Picture</h4>

                    <ProfileStyle src={photo} />

                    <input type={"file"} id={"fileUpload"} onChange={HandleChange} />
                    {!file &&
                        <button id="submit" disabled style={{ 'marginTop': '46px' }}>Submit Image</button>}
                    {file &&
                        <ButtonC onClick={HandleClick} style={{ 'marginTop': '46px' }}>Submit Image</ButtonC>}

                </div>

                <Perfil>
                    <h4 id={'name'}>Name</h4>
                    <InputPerfil type={"text"} style={{ marginBottom: 2 + 'em' }}
                        onChange={e => setName(e.target.value)} />
                    <h4 id={'age'}>Age</h4>
                    <InputPerfil type={"number"} onChange={e => setAge(e.target.value)} />

                    <ButtonC onClick={HandleClick2} style={{
                        'paddingLeft': '13px',
                        'paddingRight': '13px',
                        'display': 'inline',
                        marginRight: '20px'
                    }}>Submit</ButtonC>

                    <ButtonC onClick={HandleClick3} style={{
                        'paddingLeft': '13px',
                        'paddingRight': '13px',
                        'display': 'inline',
                        marginRight: '0px'
                    }}>Finish</ButtonC>
                </Perfil>
            </ContainerP>
            <Footer />

        </div>)
}


export default Profile