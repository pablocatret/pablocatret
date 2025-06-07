import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Inicio from './pages/Inicio';
import SobreMi from './pages/SobreMi';
import Experiencia from './pages/Experiencia';
import Educacion from './pages/Educacion';
import Proyectos from './pages/Proyectos';
import Publicaciones from './pages/Publicaciones';
import TechStack from './pages/TechStack';
import Experiencias from './pages/Experiencias';
import Contacto from './pages/Contacto';

import Grado from './pages/educacion/Grado';
import Cursos from './pages/educacion/Cursos';
import MasterCienciaDatos from './pages/educacion/MasterCienciaDatos';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/sobre-mi" element={<SobreMi />} />
          <Route path="/experiencia" element={<Experiencia />} />
          <Route path="/educacion" element={<Educacion />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/publicaciones" element={<Publicaciones />} />
          <Route path="/techstack" element={<TechStack />} />
          <Route path="/experiencias" element={<Experiencias />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/master" element={<MasterCienciaDatos />} />
          <Route path="/grado" element={<Grado />} />
          <Route path="/cursos" element={<Cursos />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
