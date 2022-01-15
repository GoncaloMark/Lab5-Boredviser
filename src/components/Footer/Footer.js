import React from 'react';
import { Box, Container, Column, Row, Flinks, Heading, Copyright } from '../styles/FooterStyles';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa'

export const Footer = () => {
    return (
        <Box>
            <Container>
                <Row>
                    <Column>
                        <Heading>About us</Heading>
                        <Flinks>Find more about us</Flinks>
                    </Column>
                    <Column>
                        <Heading>Social Media</Heading>
                        <Flinks><FaFacebook style={{"margin-right" : "10px"}}/>Facebook</Flinks>
                        <Flinks><FaTwitter style={{"margin-right" : "10px"}}/>Twitter</Flinks>
                        <Flinks><FaInstagram style={{"margin-right" : "10px"}}/>Instagram</Flinks>
                    </Column>
                </Row>
                <div>
                    <Copyright>© 2022 Boredviser - All Rights Reserved. Gonçalo Marques & Henrique França</Copyright>
                </div>
            </Container>
        </Box>
    );
};