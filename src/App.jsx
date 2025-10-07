import React from "react";
import {Route, Routes} from "react-router";
import Home from "./Pages/Home/Home.jsx";
import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";
import './general.css';

const App = () => {
    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>
            <Footer/>
        </>
    );
};

export default App;