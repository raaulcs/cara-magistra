import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Material from "./pages/Material";

const App: React.FC = () => {
  return (
    <Router>
      <header className="bg-gray-800 text-white p-4">
        <nav className="container mx-auto flex justify-between">
          <h1 className="text-xl font-bold">Clases de Español y Latín</h1>
          <ul className="flex space-x-4">
            <li><Link to="/">Sobre mí</Link></li>
            <li><Link to="/contact">Contacto</Link></li>
            <li><Link to="/material">Material</Link></li>
            <li><Link to="/blog">Blog</Link></li>
          </ul>
        </nav>
      </header>
      <main className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/material" element={<Material />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </main>
      <footer className="bg-gray-800 text-white p-4 text-center">
        © 2024 Clases de Español y Latín - Todos los derechos reservados.
      </footer>
    </Router>
  );
};

export default App;
