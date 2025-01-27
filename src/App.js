import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./paginas/Home";
import About from "./paginas/About";
import Events from "./paginas/Events";
import Parceiros from "./paginas/Parceiros";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Membros from "./paginas/Membros";
import Newsletter from "./paginas/Newsletter";
import SlidePage from "./paginas/secundarias/SlidePage";
import CongressosPage from "./paginas/secundarias/CongressosCard";
import Delegacao from "./paginas/Delegacao";
import Content from "./paginas/secundarias/Content";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/atividades/:slug" element={<Content />} />
      <Route path="/:slug" element={<SlidePage />} />
      <Route path="/congressos" element={<Events />} />
      <Route path="/congressos/:slug" element={<CongressosPage />} />
      <Route path="/membros" element={<Membros />} />
      <Route path="/membros/delegacao" element={<Delegacao />} />
      <Route path="/parceiros" element={<Parceiros />} />
      <Route path="/newsletter" element={<Newsletter />} />
    </Routes>
  );
}

export default App;