import React, {useState} from "react";
import {ContainerP} from "../styles/ContainerStyles";
import {Footer} from "../Footer/Footer";
import {ProfileStyle} from "../styles/ImageStyles";
import PersonIcon from "../../Images/PersonIcon.png"
import {uploadFiles} from "../../Firebase/Firebase";
import {useAuth} from "../../Firebase/Firebase";

function Profile() {
    const [file, setFile] = useState(null)
    const [loading, setLoading] = useState(false)
    const currentUser = useAuth()

    const HandleChange = (e) => {
        e.preventDefault();
        if (e.target.files[0]) setFile(e.target.files[0])
    }

        const HandleClick = () => {
            uploadFiles(file, currentUser, setLoading);
        }

        return (
            <div>
                <ContainerP>
                    <div>
                        <h2>Set up you Profile Page!</h2>

                        <h4>Submit A Picture</h4>
                        <h4 style={{marginLeft: 2 + 'rem'}}>Name</h4>

                        <ProfileStyle src={PersonIcon}/>

                        <input type={"file"} id={"fileUpload"} onChange={HandleChange}/>
                        <button id="submit" disabled={loading || !file} onClick={HandleClick}>Submit Image</button>

                    </div>

                </ContainerP>

                <Footer/>

            </div>
        )
    }


export default Profile