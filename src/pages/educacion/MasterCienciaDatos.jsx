import React from 'react';
import { motion } from 'framer-motion';
import masterImg from '../../assets/etse.png';

function MasterCienciaDatos() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center text-gray-800 mb-12"
      >
        Máster en Ciencia de Datos
      </motion.h1>

      <div className="md:flex md:items-center md:gap-10">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="md:w-1/2 mb-8 md:mb-0"
        >
          <img src={masterImg} alt="Máster en Ciencia de Datos" className="rounded-lg shadow-lg" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:w-1/2"
        >
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Cursando el <strong>Máster Universitario en Ciencia de Datos</strong> en la Universitat de València desde 2024, he tenido la oportunidad de recibir una formación sólida tanto teórica como práctica en múltiples disciplinas clave para el análisis avanzado de datos.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            El programa me ha permitido adquirir conocimientos profundos en <strong>machine learning</strong>, <strong>deep learning</strong>, <strong>procesamiento del lenguaje natural (NLP)</strong>, así como en el manejo de <strong>bases de datos relacionales (SQL)</strong> y <strong>no relacionales (NoSQL)</strong>. Además, se ha hecho énfasis en habilidades prácticas para el trabajo con infraestructuras <strong>cloud</strong>, fundamentales para entornos de producción actuales.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            He obtenido <strong>Matrículas de Honor</strong> en asignaturas clave como:
          </p>

          <ul className="list-disc list-inside text-gray-700 text-lg mb-6">
            <li>Introducción a la Ciencia de Datos</li>
            <li>Análisis de Señales</li>
            <li>Aprendizaje Máquina (II)</li>
          </ul>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Este máster no solo ha reforzado mis habilidades analíticas, sino que también ha potenciado mi capacidad para diseñar, implementar y comunicar soluciones basadas en datos en contextos científicos, empresariales y sociales.
          </p>

          <div className="text-left mt-6">
            <a
              href="https://www.uv.es/uvweb/universidad/es/estudios-postgrado/masteres-oficiales/oferta-masteres-oficiales/master-universitario-ciencia-datos-1285848941532/Titulacio.html?id=1285951992806"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded transition no-underline"
            >
              Más información sobre el máster
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default MasterCienciaDatos;
