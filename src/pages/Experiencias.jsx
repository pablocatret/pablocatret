import React from 'react';
import { motion } from 'framer-motion';
import premioTuvSud from '../assets/premioTuvSud.jpg';
import jouy from '../assets/jouy.jpeg';
import cursoUV from '../assets/cursoUV.jpg';

const reconocimientos = [
  {
    titulo: "Premio al Mejor Trabajo Fin de Grado sobre Sostenibilidad",
    imagen: premioTuvSud,
    descripcion: (
      <>
        En la 1.ª Edición de los Premios a Mejor Trabajo Fin de Máster y Fin de Grado sobre Sostenibilidad (ESG), organizada por <strong>TÜV SÜD España y Portugal</strong> junto a la <strong>Cátedra de Empresa y Humanismo (CEiH)</strong>, recibí un premio por mi TFG.
        <br />
        Este reconocimiento me ha permitido obtener una <strong>beca para cursar una formación de Experto en Sostenibilidad</strong>, reforzando mi compromiso con los valores ESG y la sostenibilidad en mi carrera profesional.
      </>
    )
  },
  {
    titulo: "Voluntariado en el Fort de Jouy (Francia)",
    imagen: jouy,
    descripcion: (
      <>
        Participé durante dos semanas en julio de 2024 como voluntario en la reconstrucción del <strong>Fort de Jouy</strong>, una fortificación del siglo XIX.
        <br />
        Esta experiencia me permitió colaborar con voluntarios de diversas nacionalidades, aprendiendo sobre técnicas de restauración y conservación del patrimonio histórico. Además, enriqueció mi visión del mundo y fortaleció mi capacidad de trabajar en equipos multiculturales.      </>
    )
  },
  {
    titulo: "Curso en Data Science – Universitat de València",
    imagen: cursoUV,
    descripcion: (
      <>
        Asistí al curso <strong>“Challenges in Data Science: Big Data, Biostatistics, AI, Start-ups and Communications (2022-23)”</strong> organizado por la Universitat de València.
        <br />
        Gracias a una <strong>beca</strong>, pude explorar el potencial de la Ciencia de Datos para abordar problemas reales, adquiriendo habilidades clave en inteligencia artificial, bioestadística y comunicación empresarial.
      </>
    )
  }
];

function Experiencias() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12 animate-fade-in">
        Reconocimientos y Experiencias
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {reconocimientos.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden"
          >
            <img
              src={item.imagen}
              alt={item.titulo}
              className="h-48 w-full object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{item.titulo}</h2>
              <p className="text-gray-600 text-sm">{item.descripcion}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Experiencias;
