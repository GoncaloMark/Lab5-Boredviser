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
                        <Flinks><FaFacebook style={{ "margin-right": "10px", "margin-bottom": "-2px" }} /><span style={{ "margin-right": "4px" }}>Facebook</span></Flinks>
                        <Flinks><FaInstagram style={{ "margin-right": "10px", "margin-bottom": "-2px" }} /><span style={{ "margin-left": "1px" }}>Instagram</span></Flinks>
                        <Flinks><FaTwitter style={{ "margin-right": "10px", "margin-bottom": "-2px" }} /><span style={{ "margin-right": "25px" }}>Twitter</span></Flinks>
                    </Column>
                </Row>
                <div>
                    <Copyright>© 2022 Boredviser - All Rights Reserved. Gonçalo Marques & Henrique França</Copyright>
                </div>
            </Container>
        </Box>
    );
};