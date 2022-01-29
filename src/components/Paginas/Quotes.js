import React, {useState} from 'react'
import {ButtonC} from "../styles/ButtonStyles";
import {Container} from "../styles/ContainerStyles";
import {Footer} from "../Footer/Footer";



function Quotes()
{
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

    return(<div>
            <Container>
                <div>
                    <h2>Get Inspired! We generate you a Quote</h2>
                    <p>Quote: {Quotes.text}</p>
                    <p>Author: {Quotes.author}</p>
                    <ButtonC top={"3rem"} onClick={Call}>Get Quote</ButtonC>

                </div>
            </Container>
            <Footer/>
    </div>)

}

export default Quotes