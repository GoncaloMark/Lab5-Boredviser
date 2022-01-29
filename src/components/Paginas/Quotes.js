import React, { useState } from 'react'
import { ButtonQ } from "../styles/ButtonStyles";
import { Container } from "../styles/ContainerStyles";
import { Footer } from "../Footer/Footer";
import { ImageQ } from "../styles/ImageStyles";
import ImagemQuotes from "../../Images/ImagemQuotes.png";



function Quotes() {
    const [Quotes, setQuotes] = useState([])

    const Call = () => {
        fetch('https://type.fit/api/quotes')
            .then((response) => response.json())
            .then((response) => {
                const Random = Math.floor(Math.random() * response.length)

                console.log(response[Random])

                setQuotes(response[Random])
            })
    }

    return (
        <div>
            <Container>
                <div style={{ 'width': '520px' }}>
                    <h2>Don't get bored! Get Inspired!<tr />We generate you a Quote</h2>
                    <p><span style={{ 'fontWeight': 'bold' }}>Quote:</span> <span style={{ 'fontWeight': 'lighter', 'fontStyle': 'italic' }}>"{Quotes.text}"</span></p>
                    <p><span style={{ 'fontWeight': 'bold' }}>Author:</span> <span style={{ 'fontStyle': 'italic' }}>{Quotes.author}</span></p>
                    <ButtonQ top={"3rem"} onClick={Call}>Get Quote</ButtonQ>
                </div>
                <ImageQ src={ImagemQuotes} style={{ 'marginLeft': '10px' }} />
            </Container>
            <Footer />
        </div>
    )

}

export default Quotes