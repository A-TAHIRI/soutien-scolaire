import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Apropos from "./pages/Apropos";

const App = () => {
  return (
    <BrowserRouter>
    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/apropos" element={<Apropos />} />
      {/* si ya un erreur dans url rederiction vers l'acceuil */}
      <Route path="/*" element={<Home />} />
     
      
      
    
    </Routes>
    
    </BrowserRouter>
  );
};

export default App;
