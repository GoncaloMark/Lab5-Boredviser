import React from "react";
import { ButtonC } from "../styles/ButtonStyles";
import { Card_Container, Card_Content, Card_H3, Card_P, Card_Title } from "../styles/CardsStyles";
import { Container_Card } from "../styles/ContainerStyles";
import { ImageContainer } from "../styles/ImageStyles";

function Cards() {


    return (
        <>
            <Container_Card>
                <Card_Container>
                    <ImageContainer />
                    <Card_Content>
                        <Card_Title><Card_H3>Título</Card_H3></Card_Title>
                        <Card_P>Texto</Card_P>
                    </Card_Content>
                    <ButtonC>Viewmore</ButtonC>
                </Card_Container>
            </Container_Card>
        </>
    )
}

export default Cards;