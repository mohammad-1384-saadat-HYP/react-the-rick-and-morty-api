import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";
import Home from "./Pages/Home/Home.jsx";
import Characters from "./Pages/Characters/Characters.jsx";
import SingleCharacter from "./Pages/SingleCharacter/SingleCharacter.jsx";
import Locations from "./Pages/Locations/Locations.jsx";
import SingleLocation from "./Pages/SingleLocation/SingleLocation.jsx";
import Episodes from "./Pages/Episodes/Episodes.jsx";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/characters/:slug" element={<SingleCharacter />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/locations/:slug" element={<SingleLocation />} />
        <Route path="/episodes" element={<Episodes />} />
        {/* <Route path="/episodes/:slug" element={<SingleEpisodes />} /> */}
      </Routes>
      <Footer />
    </>
  );
};

export default App;
