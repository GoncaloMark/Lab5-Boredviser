import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyles from "./components/styles/GlobalStyles";
import { ThemeProvider } from 'styled-components'

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
        <Router>
          <GlobalStyles />
          <Navbar />
          {/* <Switch>
        <Route index element={} />
        <Route path='/' element={} />
        <Route path='/' element={} />
        <Route path='/' element={} />
      </Switch> */}
        </Router>

        <div>
        fdsfsdfdsfsd
        fdsfsdfdsfsd
        <p>reiiii</p>
      </div>
      </>
    </ThemeProvider>
  );
}


export default App;
