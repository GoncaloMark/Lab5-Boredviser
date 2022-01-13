import React from 'react';
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaYoutubeSquare } from "react-icons/fa";
import { Box, Container, Column, Row, Flinks, Heading, Copyright } from '../styles/FooterStyles';

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
                        <Heading>Shops</Heading>
                        <Flinks>Buy products</Flinks>
                        <Flinks>Clothes</Flinks>
                    </Column>
                    <Column>
                        <Heading>Social Media</Heading>
                        <Flinks href='#'>
                            <i className='fab fa-facebook-f'>
                                <FaFacebookSquare />
                                <span style={{ marginLeft: '10px' }}>Facebook</span>
                            </i>
                        </Flinks>
                        <Flinks href='#'>
                            <i className='fab fa-instagram'>
                                <FaInstagramSquare />
                                <span style={{ marginLeft: '10px' }}>Instagram</span>
                            </i>
                        </Flinks>
                        <Flinks href='#'>
                            <i className='fab fa-twitter'>
                                <FaTwitterSquare />
                                <span style={{ marginLeft: '10px' }}>Twitter</span>
                            </i>
                        </Flinks>
                        <Flinks href='#'>
                            <i className='fab fa-youtube'>
                                <FaYoutubeSquare />
                                <span style={{ marginLeft: '10px' }}>Youtube</span>
                            </i>
                        </Flinks>
                    </Column>
                </Row>
                <div>
                    <Copyright>© 2022 Boredviser - All Rights Reserved. Gonçalo Marques & Henrique França</Copyright>
                </div>
            </Container>
        </Box>
    );
};