import React from 'react';
import { motion } from 'framer-motion';
import uvImg from '../../assets/mates.jpg';

function Grado() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center text-gray-800 mb-12"
      >
        Grado en Matemáticas
      </motion.h1>

      <div className="grid md:grid-cols-2 gap-10 items-center mb-12">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex flex-col gap-6"
        >
          <p className="text-lg text-gray-700 leading-relaxed">
            Mi paso por el <strong>Grado en Matemáticas</strong> en la Universitat de València supuso una base sólida y rigurosa
            en el pensamiento lógico, abstracción y resolución de problemas complejos. Durante estos años adquirí
            conocimientos profundos en <em>álgebra, cálculo, estadística, análisis numérico</em> y <em>optimización</em>,
            sentando las bases para mi posterior especialización en ciencia de datos.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            Uno de los hitos destacados fue la obtención de <strong>Matrícula de Honor</strong> en asignaturas clave como
            <em> Modelización Matemática</em>, <em>Modelos de Investigación Operativa</em> y el <em>Trabajo de Fin de Grado</em>,
            que trató sobre la predicción de flujos de CO₂ en ecosistemas naturales mediante técnicas avanzadas
            de inteligencia artificial.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            La formación me permitió desarrollar pensamiento analítico, habilidades computacionales y
            una mentalidad orientada a la resolución eficiente de problemas, cualidades que aplico a diario
            en proyectos reales de ciencia de datos y aprendizaje automático.
          </p>

          <div>
            <a
              href="https://www.uv.es/uvweb/universidad/es/estudios-grado/oferta-grados/oferta-grados/grado-matematicas-1285846094474/Titulacio.html?id=1285847387296"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded transition no-underline"
            >
              Más información sobre el grado
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src={uvImg}
            alt="Universitat de València"
            className="rounded-lg shadow-lg w-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Grado;
