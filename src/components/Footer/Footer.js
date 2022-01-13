import React from 'react';
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
                        <Heading>Social Media</Heading>
                    </Column>
                </Row>
                <div>
                    <Copyright>© 2022 Boredviser - All Rights Reserved. Gonçalo Marques & Henrique França</Copyright>
                </div>
            </Container>
        </Box>
    );
};