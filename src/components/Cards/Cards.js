import React from "react";
import { Footer } from "../Footer/Footer";
import { Card_Container , Card_Content, Card_H3, Card_P, Card_Title } from "../styles/CardsStyles";
import { Container_Card } from "../styles/ContainerStyles";
import { ImageCard } from "../styles/ImageStyles";

function Cards(props) {
    return (
        <>
        <h2 style={{ 'color': 'white' , 'textAlign':'center', 'margin-bottom': '5px' , 'margin-top': '50px'}}>Activities</h2>
            <Container_Card>
                <Card_Container>
                    <ImageCard />
                    <Card_Content>
                        <Card_Title><Card_H3>{props.type}Titulo</Card_H3></Card_Title>
                        <Card_P>{props.activity}Corpo</Card_P>
                    </Card_Content>
                </Card_Container>
                <Card_Container>
                    <ImageCard />
                    <Card_Content>
                        <Card_Title><Card_H3>{props.type}Titulo</Card_H3></Card_Title>
                        <Card_P>{props.activity}Corpo</Card_P>
                    </Card_Content>
                </Card_Container>
                <Card_Container>
                    <ImageCard />
                    <Card_Content>
                        <Card_Title><Card_H3>{props.type}Titulo</Card_H3></Card_Title>
                        <Card_P>{props.activity}Corpo</Card_P>
                    </Card_Content>
                </Card_Container>

                
                <Card_Container>
                    <ImageCard />
                    <Card_Content>
                        <Card_Title><Card_H3>{props.type}Titulo</Card_H3></Card_Title>
                        <Card_P>{props.activity}Corpo</Card_P>
                    </Card_Content>
                </Card_Container>
                <Card_Container>
                    <ImageCard />
                    <Card_Content>
                        <Card_Title><Card_H3>{props.type}Titulo</Card_H3></Card_Title>
                        <Card_P>{props.activity}Corpo</Card_P>
                    </Card_Content>
                </Card_Container>
            </Container_Card>

            <Footer />
        </>
    )
}

export default Cards;