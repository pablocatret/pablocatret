import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

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
        {/* Logo o nombre */}
        <Link
          to="/"
          className="text-2xl font-extrabold text-white tracking-tight hover:text-cyan-400 transition no-underline"
        >
          Pablo Catret
        </Link>

        {/* Navegación */}
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
    </header>
  );
};

export default Navbar;
