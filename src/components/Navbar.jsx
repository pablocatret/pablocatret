import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { path: '/', label: 'Inicio' },
    { path: '/experiencia', label: 'Experiencia' },
    { path: '/educacion', label: 'Educación' },
    { path: '/proyectos', label: 'Proyectos' },
    { path: '/techstack', label: 'Tech Stack' },
    { path: '/publicaciones', label: 'Publicaciones' },
    { path: '/experiencias', label: 'Reconocimientos y Experiencias' },
    { path: '/contacto', label: 'Contacto' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#0f172a]/95 backdrop-blur-md border-b border-slate-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-extrabold text-white tracking-tight hover:text-cyan-400 transition no-underline"
        >
          Pablo Catret
        </Link>

        {/* Menú hamburguesa visible solo en móvil */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white text-2xl">
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Navegación en escritorio */}
        <nav className="hidden md:flex items-center space-x-5">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative px-3 py-2 rounded-md text-sm font-medium no-underline transition-colors duration-300 ${
                location.pathname === link.path
                  ? 'bg-cyan-600/20 text-cyan-400'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Menú móvil desplegable */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 space-y-2 bg-[#0f172a]/95">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className={`block px-3 py-2 rounded-md text-sm font-medium no-underline transition-colors duration-300 ${
                location.pathname === link.path
                  ? 'bg-cyan-600/20 text-cyan-400'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
