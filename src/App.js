import React from "react";
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom"
import GlobalStyles from "./components/styles/GlobalStyles";
import { ThemeProvider } from 'styled-components'
import LandingPage from "./components/Paginas/LandingPage";
import Register from "./components/Paginas/Register";


const theme = {
    colors: {
        header: '#0E2A47',
        footer: '#003333'
    },
    size: {
        LPW: '800px',
        LPH: '400px',
        RW: '350px',
        RH: '450px'
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