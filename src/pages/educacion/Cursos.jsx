import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Importación explícita de los logos
import yale from '@/assets/logos/yale.png';
import stanford from '@/assets/logos/stanford.png';
import nyif from '@/assets/logos/nyif.png';
import polimi from '@/assets/logos/polimi.png';
import johnhopkins from '@/assets/logos/johnhopkins.png';
import ibm from '@/assets/logos/ibm.png';
import ub from '@/assets/logos/ub.png';
import activeloop from '@/assets/logos/activeloop.png';
import deeplearning_ai from '@/assets/logos/deeplearning_ai.png';
import neo4j from '@/assets/logos/neo4j.png';
import linkedin from '@/assets/logos/linkedin.png';
import uv from '@/assets/logos/uv.png';
import ztm from '@/assets/logos/ztm.png';
import frogames from '@/assets/logos/frogames.png';

const cursos = [
  {
    titulo: "Financial Markets (with honors)",
    institucion: "Yale University",
    fecha: "2024",
    link: "https://www.coursera.org/account/accomplishments/certificate/JGTK6C2JJP2C",
    logo: yale,
    temas: ["Finanzas"]
  },
  {
    titulo: "Machine Learning Specialization",
    institucion: "Stanford University",
    fecha: "2024",
    link: "https://www.coursera.org/account/accomplishments/specialization/certificate/2DDYWG9V7HRF",
    logo: stanford,
    temas: ["Machine Learning"]
  },
  {
    titulo: "Machine Learning for Trading Specialization",
    institucion: "New York Institute of Finance",
    fecha: "2024",
    link: "https://www.coursera.org/account/accomplishments/specialization/certificate/W6VBGFUVWAKC",
    logo: nyif,
    temas: ["Machine Learning", "Finanzas"]
  },
  {
    titulo: "Project Management: Tools, Approaches, Behavioural Skills Specialization",
    institucion: "Politecnico di Milano",
    fecha: "2024",
    link: "https://www.coursera.org/account/accomplishments/specialization/QUFFSMHHC2RX",
    logo: polimi,
    temas: ["Gestión de Proyectos"]
  },
  {
    titulo: "Advanced Statistics for Data Science Specialization",
    institucion: "John Hopkins University",
    fecha: "2024",
    link: "https://www.coursera.org/account/accomplishments/specialization/certificate/4FLJBVCH2LFB",
    logo: johnhopkins,
    temas: ["Estadística"]
  },
  {
    titulo: "Scalable Machine Learning on Big Data using Apache Spark",
    institucion: "IBM",
    fecha: "2024",
    link: "https://coursera.org/verify/HE3R24T7FGTV",
    logo: ibm,
    temas: ["Big Data", "Machine Learning"]
  },
  {
    titulo: "AI Workflow: Feature Engineering and Bias Detection",
    institucion: "IBM",
    fecha: "2024",
    link: "https://coursera.org/account/accomplishments/certificate/E8WNDVZAGX6V",
    logo: ibm,
    temas: ["Machine Learning"]
  },
  {
    titulo: "Computer Vision Basics",
    institucion: "University at Buffalo",
    fecha: "2024",
    link: "https://coursera.org/verify/SYMFZ97FBSCL",
    logo: ub,
    temas: ["Computer Vision"]
  },
  {
    titulo: "LangChain & Vector Databases in Production",
    institucion: "Activeloop",
    fecha: "2024",
    link: "https://learn.activeloop.ai/certificates/yckrkehfpr",
    logo: activeloop,
    temas: ["LLM", "IA Generativa"]
  },
  {
    titulo: "Sequences Time Series and Prediction",
    institucion: "DeepLearning.AI",
    fecha: "2024",
    link: "https://coursera.org/verify/ZJYWLP4ES6L9",
    logo: deeplearning_ai,
    temas: ["Deep Learning", "Series Temporales"]
  },
  {
    titulo: "Neo4j Graph Data Science Certification",
    institucion: "Neo4j",
    fecha: "2024",
    link: "https://graphacademy.neo4j.com/c/cd178947-9793-451a-80f9-660af2c5a5de/",
    logo: neo4j,
    temas: ["Graph ML"]
  },
  {
    titulo: "Generative AI for Everyone",
    institucion: "DeepLearning.AI",
    fecha: "2024",
    link: "https://coursera.org/account/accomplishments/certificate/CCYTES46MDQ2",
    logo: deeplearning_ai,
    temas: ["IA Generativa"]
  },
  {
    titulo: "Generative AI with Large Language Models",
    institucion: "DeepLearning.AI",
    fecha: "2024",
    link: "https://coursera.org/account/accomplishments/certificate/N47HUNBEE58V",
    logo: deeplearning_ai,
    temas: ["IA Generativa", "LLM"]
  },
  {
    titulo: "Neo4j Certified Professional",
    institucion: "Neo4j",
    fecha: "2024",
    link: "https://graphacademy.neo4j.com/c/029de18e-20ad-45cb-9810-db0bd8789d79/",
    logo: neo4j,
    temas: ["Graph ML"]
  },
  {
    titulo: "Advance Your Skills in Natural Language Processing",
    institucion: "LinkedIn",
    fecha: "2023",
    link: "https://www.linkedin.com/learning/certificates/3c558bd8afe851d4f6622705086bd43af4cb174fccf204221d86f3c3f10e3ce4",
    logo: linkedin,
    temas: ["NLP"]
  },
  {
    titulo: "Challenges in Data Science 2022-23",
    institucion: "Universitat de València",
    fecha: "2023",
    link: "https://www.uv.es",
    logo: uv,
    temas: ["Big Data", "Comunicación"]
  },
  {
    titulo: "TensorFlow Developer Certificate in 2023: Zero to Mastery",
    institucion: "Zero To Mastery Academy",
    fecha: "2023",
    link: "https://www.udemy.com/certificate/UC-6e4dff45-2c14-4d45-8828-369b495089cd/",
    logo: ztm,
    temas: ["Deep Learning"]
  },
  {
    titulo: "Curso completo de Machine Learning: Data Science en Python",
    institucion: "Frogames",
    fecha: "2022",
    link: "https://certificates.frogamesformacion.com/fc63c4e0-cd1a-4398-b138-43848a5c95c8",
    logo: frogames,
    temas: ["Data Science", "Machine Learning"]
  }
];

function Cursos() {
  const [filtro, setFiltro] = useState("Todos");
  const [animado, setAnimado] = useState(false);
  const temas = ["Todos", ...new Set(cursos.flatMap(c => c.temas))];

  const cursosFiltrados = filtro === "Todos"
    ? cursos
    : cursos.filter(c => c.temas.includes(filtro));

  useEffect(() => {
    const timer = setTimeout(() => setAnimado(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <motion.h1
        className="text-4xl font-bold text-center text-gray-800 mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Cursos y Certificaciones
      </motion.h1>

      <motion.div
        className="flex flex-wrap justify-center gap-3 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {temas.map((t, i) => (
          <button
            key={i}
            onClick={() => setFiltro(t)}
            className={`px-4 py-2 rounded-full border text-sm font-medium transition ${
              filtro === t
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-blue-600 border-blue-600 hover:bg-blue-100"
            }`}
          >
            {t}
          </button>
        ))}
      </motion.div>

      <motion.div
        className="grid md:grid-cols-2 gap-6"
        initial={!animado ? { opacity: 0, y: 40 } : false}
        animate={!animado ? { opacity: 1, y: 0 } : false}
        transition={{ duration: 0.6 }}
      >
        {cursosFiltrados.map((c, i) => (
          <a
            key={i}
            href={c.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-white p-4 shadow hover:shadow-md rounded-lg transition no-underline"
          >
            <img src={c.logo} alt={c.institucion} className="h-12 w-auto object-contain" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">{c.titulo}</h3>
              <p className="text-sm text-gray-500">{c.institucion} · {c.fecha}</p>
            </div>
          </a>
        ))}
      </motion.div>
    </section>
  );
}

export default Cursos;
