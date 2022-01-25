import React from "react";
import { Footer } from "../Footer/Footer";
import { ButtonC } from "../styles/ButtonStyles";
import { Card_Container_cima , Card_Container_baixo, Card_Content, Card_H3, Card_P, Card_Title } from "../styles/CardsStyles";
import { Container_Card } from "../styles/ContainerStyles";
import { ImageContainer } from "../styles/ImageStyles";

function Cards(props) {


    return (
        <>
        <h2 style={{ 'color': 'white' , 'textAlign':'center', 'margin-bottom': '5px'}}>Activities</h2>
            <Container_Card>
                <Card_Container_cima>
                    <ImageContainer />
                    <Card_Content>
                        <Card_Title><Card_H3>{props.type}</Card_H3></Card_Title>
                        <Card_P>{props.activity}</Card_P>
                    </Card_Content>
                    
                </Card_Container_cima>
                <Card_Container_cima>
                    <ImageContainer />
                    <Card_Content>
                        <Card_Title><Card_H3>{props.type}</Card_H3></Card_Title>
                        <Card_P>{props.activity}</Card_P>
                    </Card_Content>
                </Card_Container_cima>
                <Card_Container_cima>
                    <ImageContainer />
                    <Card_Content>
                        <Card_Title><Card_H3>{props.type}</Card_H3></Card_Title>
                        <Card_P>{props.activity}</Card_P>
                    </Card_Content>
                </Card_Container_cima>

                
                <Card_Container_baixo>
                    <ImageContainer />
                    <Card_Content>
                        <Card_Title><Card_H3>{props.type}</Card_H3></Card_Title>
                        <Card_P>{props.activity}</Card_P>
                    </Card_Content>
                </Card_Container_baixo>
                <Card_Container_baixo>
                    <ImageContainer />
                    <Card_Content>
                        <Card_Title><Card_H3>{props.type}</Card_H3></Card_Title>
                        <Card_P>{props.activity}</Card_P>
                    </Card_Content>
                </Card_Container_baixo>
            </Container_Card>

            <Footer />
        </>
    )
}

export default Cards;