import React, {useState} from "react";
import {ContainerP, Perfil} from "../styles/ContainerStyles";
import {Footer} from "../Footer/Footer";
import {ProfileStyle} from "../styles/ImageStyles";
import {uploadFiles, useAuth} from "../../Firebase/Firebase";
import {ButtonC} from "../styles/ButtonStyles";


function Profile() {
    const [file, setFile] = useState(null)
    const [loading, setLoading] = useState(false)
    const[photo, setPhoto] = useState('https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1024px-Circle-icons-profile.svg.png')
    const currentUser = useAuth()

    const Profile = {
        name: '',
        photo: photo
    }

    const HandleChange = (e) => {
        e.preventDefault();
        if (e.target.files[0]) setFile(e.target.files[0])
    }

        const HandleClick = () => {
            uploadFiles(file, currentUser, setLoading);
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
                        <input type={"text"}/>
                    </Perfil>

                </ContainerP>
                <Footer/>

            </div>
        )
    }


export default Profile