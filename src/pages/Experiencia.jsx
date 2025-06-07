import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaUniversity } from 'react-icons/fa';
import { HiOutlineBuildingOffice2, HiOutlineLightBulb } from "react-icons/hi2";
import { MdScience } from 'react-icons/md';

function Experiencia() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const trabajos = [
    {
      puesto: "Data Science Researcher",
      empresa: "IRTIC - Universitat de València",
      fecha: "Sept 2024 – Actualidad",
      icono: <MdScience />,
      descripcion: [
        "Responsable del ciclo completo de datos (ETL, modelado, visualización) en varios proyectos de investigación.",
        "Desarrollo de modelos de ML/DL para clasificación, predicción y detección de anomalías en distintos dominios (teledetección, flujos ambientales, series temporales).",
        "Automatización de pipelines de datos y diseño de soluciones con herramientas modernas de ciencia de datos.",
        "Coautor de un artículo publicado en revista Q1 (IJAEOG) y varios trabajos en proceso de revisión."
      ],
      resultado: "Consolidé una línea estable de ciencia de datos que permitió escalar el impacto del grupo, integrando procesos avanzados de análisis en el flujo de trabajo habitual y fortaleciendo la producción científica y colaborativa."
    },
    {
      puesto: "Data Scientist Intern",
      empresa: "Capgemini",
      fecha: "Feb 2024 – Jun 2024",
      icono: <HiOutlineBuildingOffice2 />,
      descripcion: [
        "Participación en proyecto de AML (anti–money laundering) con Graph ML y ML explicable.",
        "Modelos de predicción de series temporales y detección automática de anomalías.",
        "Formación aplicada en LLMs y Generative AI."
      ],
      resultado: "Mi propuesta de mejora en modelos de predicción fue integrada en el flujo del proyecto, mejorando la anticipación de eventos clave."
    },
    {
      puesto: "Data Science Researcher (Colaborador)",
      empresa: "IRTIC - Universitat de València",
      fecha: "Ene 2023 – Sept 2024",
      icono: <FaUniversity />,
      descripcion: [
        "Coautor de un estudio publicado en Ecological Informatics (Q1) sobre predicción de flujos eddy mediante ML.",
        "Diseño y entrenamiento de modelos predictivos robustos basados en series temporales ambientales, con resultados presentados en la ICOS Science Conference 2024.",
        "Implementación integral de soluciones de ciencia de datos, desde la preparación y modelado hasta la validación de resultados en proyectos colaborativos."
      ],
      resultado: "Lideré la creación de los flujos de trabajo de ciencia de datos desde cero, convirtiéndome en el referente técnico del grupo para el diseño, automatización y análisis de datos en proyectos de investigación."
    }
  ];

  return (
    <section className="max-w-5xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Experiencia Profesional</h1>
      <div className="relative border-l-4 border-blue-500 pl-6 space-y-10">
        {trabajos.map((trabajo, index) => (
          <div
            key={index}
            className="relative bg-white rounded-lg shadow-lg p-6 transition-all hover:shadow-xl"
            data-aos="fade-up"
          >
            <div className="absolute -left-6 top-6 bg-blue-500 text-white p-2 rounded-full shadow text-xl">
              {trabajo.icono}
            </div>
            <h2 className="text-2xl font-semibold text-blue-700">{trabajo.puesto}</h2>
            <h3 className="text-lg text-gray-700">{trabajo.empresa}</h3>
            <p className="text-sm text-gray-500 italic mb-3">{trabajo.fecha}</p>
            <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
              {trabajo.descripcion.map((linea, i) => (
                <li key={i}>{linea}</li>
              ))}
            </ul>
            <div className="flex items-start gap-2 bg-blue-50 border-l-4 border-blue-400 text-blue-900 italic px-4 py-2 rounded">
              <HiOutlineLightBulb className="mt-1 text-blue-400 w-4 h-4 flex-shrink-0" />
              <span>{trabajo.resultado}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experiencia;
