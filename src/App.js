import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyles from "./components/styles/GlobalStyles";
import { ThemeProvider } from 'styled-components'
import {Container} from "./components/styles/ContainerStyles";
import { Footer } from "./components/Footer/Footer";
import {Image} from "./components/styles/ImageStyles";
import ImagemLandingPage from "./Images/ImagemLandingPage.png"


const theme = {
    colors: {
        header: '#0E2A47',
        footer: '#003333'
    },
}

function App() {
    return (

        <ThemeProvider theme={theme}>
            <>
                <GlobalStyles/>
                <Router>

                    <Navbar/>
                    {/* <Switch>
        <Route index element={} />
        <Route path='/' element={} />
        <Route path='/' element={} />
        <Route path='/' element={} />
      </Switch> */}
                </Router>

                <Container>
                    <div>
                    <h2>Get started! Don't get bored!</h2>
                        <p>Engage in genuine activities, here at Boredviser we are ready to connect you to the most suitable activities, personalized just for you!</p>
                    </div>
                        <Image src={ImagemLandingPage}/>
                </Container>
                <Footer/>
            </>
        </ThemeProvider>
    );
}


export default App;