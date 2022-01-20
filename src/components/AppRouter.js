import Navbar from "./Navbar/Navbar";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import LandingPage from "./Paginas/LandingPage";
import {Registo} from "./Paginas/Register";
import Preferences from "./Paginas/Preferences";
import React from "react";


export default function AppRouter()
{
    return( <Router>
        <Navbar/>
        <Routes>
            <Route index element={<LandingPage/>} />
            <Route path="LogIn" element={<Registo/>}/>
            <Route path="Preferences/:uid" element={<Preferences/>}/>
        </Routes>
    </Router>)

}