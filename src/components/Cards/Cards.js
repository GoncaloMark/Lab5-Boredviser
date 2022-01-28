import React from "react";
import { Footer } from "../Footer/Footer";
import { Card_Container , Card_Content, Card_H3, Card_P, Card_Title } from "../styles/CardsStyles";
import { Container_Card } from "../styles/ContainerStyles";
import { ImageCard } from "../styles/ImageStyles";

function Cards(props) {

    const lista = props.h

    return (
        <>
        <h2 style={{ 'color': 'white' , 'textAlign':'center', 'margin-bottom': '5px' , 'margin-top': '20px'}}>Activities</h2>
            <Container_Card>
                <Card_Container>
                    <ImageCard/>
                    <Card_Content>
                        <Card_Title><Card_H3>{lista[0].activity}</Card_H3></Card_Title>
                        <Card_P>{lista[0].type}</Card_P>
                    </Card_Content>
                </Card_Container>
                <Card_Container>
                    <ImageCard/>
                    <Card_Content>
                        <Card_Title><Card_H3>{lista[1].activity}</Card_H3></Card_Title>
                        <Card_P>{lista[1].type}</Card_P>
                    </Card_Content>
                </Card_Container>
                <Card_Container>
                    <ImageCard/>
                    <Card_Content>
                        <Card_Title><Card_H3>{lista[2].activity}</Card_H3></Card_Title>
                        <Card_P>{lista[2].type}</Card_P>
                    </Card_Content>
                </Card_Container>
                
                <Card_Container>
                    <ImageCard/>
                    <Card_Content>
                        <Card_Title><Card_H3>{lista[3].activity}</Card_H3></Card_Title>
                        <Card_P>{lista[3].type}</Card_P>
                    </Card_Content>
                </Card_Container>
                <Card_Container>
                    <ImageCard/>
                    <Card_Content>
                        <Card_Title><Card_H3>{lista[4].activity}</Card_H3></Card_Title>
                        <Card_P>{lista[4].type}</Card_P>
                    </Card_Content>
                </Card_Container>
            </Container_Card>

        </>
    )
}

export default Cards;