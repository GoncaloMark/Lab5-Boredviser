import React, {useState} from "react";
import {ContainerP, Perfil} from "../styles/ContainerStyles";
import {Footer} from "../Footer/Footer";
import {ProfileStyle} from "../styles/ImageStyles";
import {uploadFiles, useAuth, DownloadFiles} from "../../Firebase/Firebase";
import {ButtonC} from "../styles/ButtonStyles";
import { InputPerfil } from "../styles/ProfileStyles";


function Profile() {
    const [file, setFile] = useState(null)
    const [loading, setLoading] = useState(false)
    const[photo, setPhoto] = useState('https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1024px-Circle-icons-profile.svg.png')
    const currentUser = useAuth()
    const[name, setName] = useState('')
    const [Profile, setProfile] = useState({
        name: '',
        photo: '',
    })

    //setProfile({name: Profile.name, photo:photo})

    const HandleChange = (e) => {
        e.preventDefault();
        if (e.target.files[0]) setFile(e.target.files[0])
    }

        const HandleClick = () => {
            uploadFiles(file, currentUser, setLoading);
            DownloadFiles(currentUser, setPhoto).then(()=>{});

            setFile(null)
        }

        return (
            <div>
                <ContainerP>
                    <div>
                        <h2>Set up you Profile Page!</h2>

                        <h4>Submit A Picture</h4>

                        <ProfileStyle src={photo}/>

                        <input type={"file"} id={"fileUpload"} onChange={HandleChange}/>
                        {!file && <button id="submit" disabled>Submit Image</button>}
                        {file && <ButtonC onClick={HandleClick} >Submit Image</ButtonC>}

                    </div>


                    <Perfil>
                        <h4 id={'name'}>Name</h4>
                        <InputPerfil type={"text"} onChange={e => setName(e.target.value)}/>

                        <ButtonC style={{'paddingLeft':'13px','paddingRight':'13px'}}>Submit Profile</ButtonC>
                    </Perfil>



                </ContainerP>
                <Footer/>

            </div>
        )
    }


export default Profile