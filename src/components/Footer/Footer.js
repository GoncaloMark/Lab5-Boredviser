import React from 'react';
import { Box, Container, Column, Row, Flinks, Heading, Copyright, LinksF } from '../styles/FooterStyles';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa'

export const Footer = () => {
    return (
        <Box>
            <Container>
                <Row>
                    <Column>
                        <Heading>About us</Heading>
                        <Flinks to='/AboutUs'>Find more about us</Flinks>
                    </Column>
                    <Column>
                        <Heading>Social Media</Heading>
                        <LinksF><FaFacebook style={{ "margin-right": "10px", "margin-bottom": "-2px" }} /><span style={{ "margin-right": "4px" }}>Facebook</span></LinksF>
                        <LinksF><FaInstagram style={{ "margin-right": "10px", "margin-bottom": "-2px" }} /><span style={{ "margin-left": "1px" }}>Instagram</span></LinksF>
                        <LinksF><FaTwitter style={{ "margin-right": "10px", "margin-bottom": "-2px" }} /><span style={{ "margin-right": "25px" }}>Twitter</span></LinksF>
                    </Column>
                </Row>
                <div>
                    <Copyright>© 2022 Boredviser - All Rights Reserved. Gonçalo Marques & Henrique França</Copyright>
                </div>
            </Container>
        </Box>
    );
};