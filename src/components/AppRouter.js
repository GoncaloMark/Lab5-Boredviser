import Navbar from "./Navbar/Navbar";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import LandingPage from "./Paginas/LandingPage";
import {Registo} from "./Paginas/Register";
import React from 'react'
import Preferences from "./Paginas/Preferences";
import AboutUs from "./Paginas/AboutUs";
import Profile from "./Paginas/Profile";
import Cards from './Cards/Cards'

export default function AppRouter()
{
    return( <Router>
        <Navbar/>
        <Routes>
            <Route index element={<LandingPage/>} />
            <Route path="LogIn" element={<Registo/>}/>
            <Route path="Preferences/:uid" element={<Preferences/>}/>
            <Route path="AboutUs" element={<AboutUs/>}/>
            <Route path="Profile" element={<Profile/>}/>
            <Route path="Cards" element={<Cards/>}/>
        </Routes>
    </Router>)

}