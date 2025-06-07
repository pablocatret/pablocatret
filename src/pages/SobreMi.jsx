import React from 'react';
import { motion } from 'framer-motion';
import perfil from '../assets/pablosobremi.jpeg';
import cvPDF from '../assets/CV_PabloCatretRuber_.pdf';

function SobreMi() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      {/* Imagen */}
      <motion.div
        className="flex justify-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <img
          src={perfil}
          alt="Pablo Catret"
          className="w-full max-w-md h-auto object-cover rounded-xl shadow-lg border-4 border-gray-200"
        />

      </motion.div>

      {/* Texto */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h1 className="text-4xl font-extrabold text-gray-900 mb-6">
          ¡Hola! Soy Pablo Catret
        </h1>
        <p className="text-gray-700 text-lg mb-4">
          Científico de Datos e Ingeniero de Datos especializado en aplicar modelos de Machine Learning, IA y análisis estadístico para resolver problemas reales en sectores como medio ambiente, finanzas y servicios urbanos. Además, diseño y mantengo pipelines de datos robustos mediante procesos ETL eficientes y escalables.
        </p>
        <p className="text-gray-700 text-lg mb-4">
          Me apasiona transformar datos en decisiones, explorar soluciones innovadoras con modelos explicables y construir sistemas sólidos que aporten valor desde la captura de datos hasta la generación de conocimiento.
        </p>
        <p className="text-gray-700 text-lg mb-6">
          Con experiencia en investigación aplicada, proyectos colaborativos y entornos cloud como AWS, estoy preparado para afrontar nuevos retos tanto en ciencia de datos como en ingeniería de datos.
        </p>

        <a
          href={cvPDF}
          download
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-300 no-underline"
        >
          Descargar CV
        </a>
      </motion.div>
    </section>
  );
}

export default SobreMi;
