import React, {useState} from "react";
import {ContainerP} from "../styles/ContainerStyles";
import {Footer} from "../Footer/Footer";
import {ProfileStyle} from "../styles/ImageStyles";
import PersonIcon from "../../Images/PersonIcon.png"
import {storage} from "../../Firebase/Firebase"
import {ref, uploadBytesResumable, getDownloadURL} from "firebase/storage"
import {ButtonC} from "../styles/ButtonStyles";

function Profile()
{
    const [progress, setProgress] = useState(0)
    const uploadFiles = (file) => {
        if(!file) return;

        const storageRef = ref(storage, `/files/${file.name}`)
        const uploadTask = uploadBytesResumable(storageRef, file)

        uploadTask.on("state_changed", (snapshot) => {
            const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
            setProgress(progress)
        }, (err) => {alert(err.message)}, () => {
            getDownloadURL(uploadTask.snapshot.ref)
                .then(url => console.log(url))
        })

    }
    return(
        <div>
            <ContainerP>
                <div>
                    <h2>Set up you Profile Page!</h2>

                        <h4>Submit A Picture</h4>
                        <h4 style={{marginLeft: 2 + 'rem'}}>Name</h4>

                    <ProfileStyle src={PersonIcon}/>

                    <input type={"file"} id={"fileUpload"}/>
                    <label htmlFor={"fileUpload"}>Submit Image</label>

                </div>

            </ContainerP>

            <Footer/>

        </div>
    )

}

export default Profile