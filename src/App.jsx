import React from "react";
import { Route, Routes } from "react-router";
import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";
import Home from "./Pages/Home/Home.jsx";
import Characters from "./Pages/Characters/Characters.jsx";
import Episodes from "./Pages/Episodes/Episodes.jsx";
import Locations from "./Pages/Locations/Locations.jsx";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/episodes" element={<Episodes />} />
        <Route path="/locations" element={<Locations />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
