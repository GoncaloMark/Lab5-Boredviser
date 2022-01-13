import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyles from "./components/styles/GlobalStyles";
import { ThemeProvider } from 'styled-components'
import {Container} from "./components/styles/ContainerStyles";
import { Footer } from "./components/Footer/Footer";


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
                    <div>
                        <p>Engage in genuine activities, here at Boredviser we are ready</p>
                        <p>to connect you to the most suitable activities, personalized just</p>
                        <p>for you!</p>
                    </div>
                    </div>
                </Container>
<Footer />

            </>
        </ThemeProvider>
    );
}


export default App;