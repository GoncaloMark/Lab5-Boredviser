import React from "react";
import GlobalStyles from "./components/styles/GlobalStyles";
import { ThemeProvider } from 'styled-components'
import AppRouter from "./components/AppRouter";

const theme = {
    colors: {
        header: '#0E2A47',
        footer: '#003333'
    },
    size: {
        LPW: '800px',
        LPH: '400px',
        RW: '350px',
        RH: '350px',
        CW: '1600px',
        CH: '300px'
    }
}

function App() {
    return (
            <ThemeProvider theme={theme}>
                <GlobalStyles/>
                    <AppRouter/>
            </ThemeProvider>
    );
}


export default App;