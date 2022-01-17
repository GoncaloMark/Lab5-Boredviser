import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import GlobalStyles from "./components/styles/GlobalStyles";
import { ThemeProvider } from 'styled-components'
import LandingPage from "./components/Paginas/LandingPage";
import Register from "./components/Paginas/Register";
import Navbar from "./components/Navbar/Navbar";

const theme = {
    colors: {
        header: '#0E2A47',
        footer: '#003333'
    },
    size: {
        LPW: '800px',
        LPH: '400px',
        RW: '350px',
        RH: '350px'
    }
}

function App() {
    return (

        <ThemeProvider theme={theme}>

            <>
                <GlobalStyles/>

                <Router>
                    <Navbar/>

                    <Routes>
                        <Route index element={<LandingPage/>} />
                        <Route path="Register" element={<Register/>}/>
                    </Routes>

                </Router>
            </>

        </ThemeProvider>
    );
}


export default App;