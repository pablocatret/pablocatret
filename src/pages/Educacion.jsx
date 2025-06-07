import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaUniversity } from 'react-icons/fa';
import { MdSchool } from 'react-icons/md';

// IMPORTACIÓN DE LOGOS DESDE ASSETS
import stanford from '@/assets/logos/stanford.png';
import yale from '@/assets/logos/yale.png';
import johnhopkins from '@/assets/logos/johnhopkins.png';
import ibm from '@/assets/logos/ibm.png';
import deeplearning_ai from '@/assets/logos/deeplearning_ai.png';
import neo4j from '@/assets/logos/neo4j.png';
import aws from '@/assets/logos/aws.png';
import googlecloud from '@/assets/logos/googlecloud.png';
import nyif from '@/assets/logos/nyif.png';
import polimi from '@/assets/logos/polimi.png';
import ub from '@/assets/logos/ub.png';
import uv from '@/assets/logos/uv.png';

function FadeInImage({ src, alt, onLoad }) {
  const [loaded, setLoaded] = React.useState(false);

  return (
    <img
      src={src}
      alt={alt}
      onLoad={() => {
        setLoaded(true);
        onLoad(); // Notifica que se ha cargado
      }}
      className={`h-12 w-auto grayscale hover:grayscale-0 transition-opacity duration-700 ease-in-out ${
        loaded ? 'opacity-100' : 'opacity-0'
      }`}
      style={{ transitionDelay: loaded ? '200ms' : '0ms' }}
    />
  );
}



function Educacion() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const estudios = [
    {
      titulo: "Máster en Ciencia de Datos",
      institucion: "Universitat de València",
      fechas: "2024 – Actualidad",
      nota: "Nota actual: 9.48",
      icono: <MdSchool />,
      descripcion:
        "Formación avanzada en estadística, Machine Learning, Deep Learning y Big Data. Enfoque aplicado con proyectos en salud, finanzas y procesamiento de lenguaje natural (NLP).",
      enlace: "/master"
    },
    {
      titulo: "Grado en Matemáticas",
      institucion: "Universitat de València",
      fechas: "2020 – 2024",
      nota: "Nota final: 8.63",
      icono: <FaUniversity />,
      descripcion:
        "Base sólida en álgebra, cálculo, estadística, optimización y programación. TFG con Matrícula de Honor sobre predicción de CO₂ en diversos ecosistemas usando IA.",
      enlace: "/grado"
    }
  ];

  const logos = [
    stanford, yale, johnhopkins, ibm, deeplearning_ai, neo4j,
    aws, googlecloud, nyif, polimi, ub, uv
  ];

  const [loadedCount, setLoadedCount] = useState(0);
  const totalLogos = logos.length * 2;

  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Formación Académica</h1>
      
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {estudios.map((e, index) => (
          <div
            key={index}
            data-aos="fade-up"
            className="bg-white border-l-4 border-blue-500 rounded-lg shadow p-6 hover:shadow-lg transition"
          >
            <div className="flex items-center gap-3 mb-2 text-blue-600 text-2xl">
              {e.icono}
              <h2 className="text-xl font-semibold">{e.titulo}</h2>
            </div>
            <p className="text-gray-700">{e.institucion}</p>
            <p className="text-sm text-gray-500 italic">{e.fechas}</p>
            <p className="text-sm font-medium text-gray-600 mt-1">{e.nota}</p>
            <p className="text-sm text-gray-700 mt-3">{e.descripcion}</p>

            <Link
              to={e.enlace}
              className="no-underline mt-4 inline-block text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded transition duration-300"
            >
              Ver más detalles
            </Link>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">Cursos y Certificaciones</h2>

      <div className="overflow-x-hidden py-4 px-2 bg-gray-50 rounded-lg shadow-inner mb-6">
      <div className="flex gap-6 animate-scroll-x w-max">
        {[...logos, ...logos].map((logo, i) => (
          <FadeInImage
            key={i}
            src={logo}
            alt={`Logo ${i}`}
            onLoad={() => setLoadedCount(prev => prev + 1)}
          />
        ))}
      </div>
    </div>



      <div className="text-center">
        <Link
          to="/cursos"
          className="no-underline inline-block text-sm font-medium text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white px-6 py-2 rounded transition duration-300"
        >
          Descubre todos los cursos que he realizado
        </Link>
      </div>
    </section>
  );
}

export default Educacion;
