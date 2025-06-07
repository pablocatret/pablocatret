import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import pabloImg from '../assets/pablo.jpg'; // Asegúrate de que la ruta es correcta

function Inicio() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white px-6">
      <motion.div
        className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Imagen */}
        <div className="flex justify-center">
          <img
            src={pabloImg}
            alt="Pablo Catret"
            className="w-72 h-72 object-cover rounded-full shadow-lg border-4 border-white"
          />
        </div>

        {/* Texto */}
        <div className="text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4 leading-tight">
            Pablo Catret
          </h1>
          <p className="text-xl md:text-2xl text-blue-700 font-semibold mb-4">
            Data Scientist · Data Engineer · Investigador
          </p>
          <p className="text-md md:text-lg text-gray-700 mb-6 leading-relaxed">
            Me dedico a convertir datos complejos en soluciones claras, automatizadas y con impacto.
            Desde proyectos científicos hasta sistemas de producción, combino conocimiento técnico
            con una visión aplicada para resolver problemas reales.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
            <Link to="/sobre-mi">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl shadow-md transition duration-300">
                Saber más sobre mí
              </button>
            </Link>
            <Link to="/proyectos">
              <button className="bg-white border border-gray-300 hover:bg-gray-100 text-gray-800 font-semibold py-3 px-6 rounded-xl shadow-sm transition duration-300">
                Ver proyectos
              </button>
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Inicio;
