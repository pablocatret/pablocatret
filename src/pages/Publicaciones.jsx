import React from 'react';
import { motion } from 'framer-motion';
import libroImg from '../assets/Abtesting_portada.png';

function Publicaciones() {
  const libros = [
    {
      titulo: "A/B Testing: Guía práctica para resultados reales",
      año: "2025",
      descripcion: `En un mundo impulsado por los datos, tomar decisiones basadas en evidencia cuantitativa es crucial. Este libro es una guía integral para dominar la experimentación digital en productos, marketing y experiencia de usuario.

Está dirigido a científicos de datos, analistas, profesionales de marketing, diseñadores UX/UI, desarrolladores y académicos interesados en la aplicación rigurosa del A/B testing. A lo largo del libro, aprenderás fundamentos estadísticos y metodológicos, diseño de experimentos robustos, análisis avanzado (incluyendo enfoques bayesianos), técnicas de optimización y segmentación, y casos prácticos en entornos reales.

Esta guía te proporcionará las herramientas necesarias para implementar pruebas efectivas, interpretar resultados con precisión y aplicar mejoras basadas en datos en cualquier sector.`,
      disponible: true,
      imagen: libroImg,
      enlace: "https://www.amazon.es/Testing-Gu%C3%ADa-Pr%C3%A1ctica-Resultados-Reales/dp/B0DVTR4LSN",
    },
  ];

  const articulos = [
    {
      titulo: "Predicting the fundamental fluxes of an eddy-covariance station using ML",
      revista: "Ecological Informatics (Q1)",
      año: "2023",
      descripcion: `Este estudio explora cómo modelos de inteligencia artificial pueden predecir con gran precisión parámetros clave del comportamiento ambiental de un viñedo, como el intercambio de calor y dióxido de carbono. Utilizando datos meteorológicos, se compararon distintas técnicas de machine learning para estimar estos flujos. Los resultados muestran que los modelos empleados ofrecen estimaciones muy fiables, lo que los convierte en herramientas útiles para monitorizar el impacto del cambio climático en cultivos.`,
      enlace: "https://www.sciencedirect.com/science/article/pii/S1569843225001840",
    },
    {
      titulo: "Comparative analysis of algorithms for VAS station land cover classification",
      revista: "International Journal of Applied Earth Observation and Geoinformation (Q1)",
      año: "2024",
      descripcion: `Este trabajo analiza la mejor forma de clasificar los distintos tipos de terreno que rodean la estación de observación VAS en Valencia, España, usando imágenes de satélite. Se evaluaron diversas técnicas de aprendizaje automático, incluyendo modelos avanzados de deep learning. La metodología permitió alcanzar una precisión del 96 %, incluso usando una cantidad limitada de datos, lo que demuestra su utilidad para aplicaciones en agricultura, medio ambiente o planificación territorial.`,
      enlace: "https://www.sciencedirect.com/science/article/pii/S1574954124001808",
    },
  ];

  const congresos = [
    {
      titulo: "Poster en ICOS Science Conference 2024",
      evento: "ICOS Science Conference",
      año: "2024",
      descripcion: `Presentación de resultados preliminares sobre la modelización de flujos de carbono mediante algoritmos supervisados entrenados con datos procedentes de estaciones eddy-covariance en el marco de la red ICOS.`,
      enlace: "https://www.icos-cp.eu/event/icos-science-conference-2024",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto p-6">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-gray-900 mb-12 text-center"
      >
        Publicaciones y Libros
      </motion.h1>

      {/* Libros */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-16"
      >
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Libros</h2>
        {libros.map((libro, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-md rounded-xl p-6 flex flex-col md:flex-row gap-6 items-start mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            {libro.imagen && (
              <img
                src={libro.imagen}
                alt={libro.titulo}
                className="w-36 h-auto rounded-lg border border-gray-200 shadow-sm"
              />
            )}
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 mb-1">{libro.titulo}</h3>
              <p className="text-sm text-gray-500 italic mb-4">{libro.año}</p>
              <p className="text-gray-700 text-sm whitespace-pre-line mb-4">{libro.descripcion}</p>
              {libro.disponible && libro.enlace && (
                <a
                  href={libro.enlace}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm no-underline transition"
                >
                  Ver o comprar
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Artículos */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mb-16"
      >
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Artículos científicos en revistas indexadas
        </h2>
        {articulos.map((pub, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-md rounded-xl p-6 mb-6 border-l-4 border-blue-500"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
          >
            <h3 className="text-lg font-semibold text-gray-900">{pub.titulo}</h3>
            <p className="text-sm text-gray-500 italic mb-2">
              {pub.revista} • {pub.año}
            </p>
            <p className="text-gray-700 text-sm mb-2">{pub.descripcion}</p>
            {pub.enlace && (
              <a
                href={pub.enlace}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-600 hover:text-blue-800 no-underline"
              >
                Leer publicación completa
              </a>
            )}
          </motion.div>
        ))}
      </motion.div>

      {/* Congresos */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mb-16"
      >
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Congresos y conferencias
        </h2>
        {congresos.map((conf, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-md rounded-xl p-6 mb-6 border-l-4 border-blue-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
          >
            <h3 className="text-lg font-semibold text-gray-900">{conf.titulo}</h3>
            <p className="text-sm text-gray-500 italic mb-2">
              {conf.evento} • {conf.año}
            </p>
            <p className="text-gray-700 text-sm mb-2">{conf.descripcion}</p>
            {conf.enlace && (
              <a
                href={conf.enlace}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-600 hover:text-blue-800 no-underline"
              >
                Ver información del evento
              </a>
            )}
          </motion.div>
        ))}
      </motion.div>

      {/* Nota final */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-sm text-gray-600 text-center max-w-2xl mx-auto"
      >
        Además de las publicaciones anteriores, se encuentran en fase de revisión varios manuscritos relacionados con el uso de inteligencia artificial en problemas medioambientales, modelos climáticos, teledetección, detección de anomalías y predicción de contaminantes atmosféricos.
      </motion.div>
    </section>
  );
}

export default Publicaciones;
