import React from 'react';
import { motion } from 'framer-motion';

import {
  FaBrain, FaDatabase, FaChartLine, FaGlobeEurope, FaAws, FaYahoo,
  FaCode, FaCogs, FaChartBar, FaProjectDiagram, FaRobot, FaTools, FaSearch, FaChartPie, FaDiceFive, FaGlobeAmericas, FaSatellite, FaExclamationCircle, FaChartArea
} from 'react-icons/fa';

import {
  SiPython, SiR, SiPandas, SiNumpy, SiScikitlearn, SiTensorflow,
  SiApacheairflow, SiDocker, SiGeopandas, SiGdal, SiPlotly, SiNeo4J,
  SiMysql, SiMongodb, SiGit, SiFastapi, SiMlflow,
  SiSpacy, SiLangchain, SiHuggingface,
  SiKeras, SiScipy, SiApachespark, SiPytorch, SiOpenai, SiSelenium,
  SiPostgresql
} from 'react-icons/si';

const skills = [
  {
    titulo: "Machine Learning y Ciencia de Datos",
    icono: <FaBrain className="text-red-600 text-3xl" />,
    herramientas: [
      { nombre: "Python", icono: <SiPython /> },
      { nombre: "Pandas", icono: <SiPandas /> },
      { nombre: "NumPy", icono: <SiNumpy /> },
      { nombre: "SciPy", icono: <SiScipy /> },
      { nombre: "Scikit-learn", icono: <SiScikitlearn /> },
      { nombre: "Statsmodels", icono: <FaCode /> },
      { nombre: "XGBoost", icono: <FaRobot /> },
      { nombre: "TensorFlow", icono: <SiTensorflow /> },
      { nombre: "Keras", icono: <SiKeras /> },
      { nombre: "PyTorch", icono: <SiPytorch /> },
      { nombre: "PyOD", icono: <FaExclamationCircle /> },
      { nombre: "R", icono: <SiR /> },
    ]
  },
  {
    titulo: "Procesamiento de Lenguaje Natural y LLMs",
    icono: <FaRobot className="text-green-600 text-3xl" />,
    herramientas: [
      { nombre: "spaCy", icono: <SiSpacy /> },
      { nombre: "NLTK", icono: <FaCode /> },
      { nombre: "BeautifulSoup", icono: <FaSearch /> },
    //   { nombre: "Selenium", icono: <SiSelenium /> },
      { nombre: "LangChain", icono: <SiLangchain /> },
      { nombre: "Hugging Face Transformers", icono: <SiHuggingface /> },
      { nombre: "Open AI API", icono: <SiOpenai /> }

    ]
  },
  {
    titulo: "Ingeniería de Datos y MLOps",
    icono: <FaTools className="text-gray-600 text-3xl" />,
    herramientas: [
      { nombre: "Apache Airflow", icono: <SiApacheairflow /> },
      { nombre: "Docker", icono: <SiDocker /> },
      { nombre: "Git", icono: <SiGit /> },
      { nombre: "AWS", icono: <FaAws /> },
      { nombre: "FastAPI", icono: <SiFastapi /> },
      { nombre: "MLflow", icono: <SiMlflow /> },
      { nombre: "PySpark", icono: <SiApachespark /> },

    ]
  },
  {
    titulo: "Bases de Datos y Modelado",
    icono: <FaDatabase className="text-blue-600 text-3xl" />,
    herramientas: [
      { nombre: "SQL", icono: <SiPostgresql /> },
      { nombre: "MongoDB", icono: <SiMongodb /> },
      { nombre: "Cassandra", icono: <FaDatabase /> },
      { nombre: "Neo4j", icono: <SiNeo4J /> }
    ]
  },

    {
    titulo: "Visualización de Datos",
    icono: <FaChartBar className="text-indigo-600 text-3xl" />,
    herramientas: [
      { nombre: "Matplotlib", icono: <FaChartPie /> },
      { nombre: "Seaborn", icono: <FaChartArea  /> },
      { nombre: "Plotly", icono: <SiPlotly /> },
      { nombre: "Dash", icono: <SiPlotly /> },
      { nombre: "Power BI", icono: <FaChartBar /> }
    ]
  },
  {
    titulo: "Finanzas Cuantitativas",
    icono: <FaChartLine className="text-purple-600 text-3xl" />,
    herramientas: [
      { nombre: "Yahoo Finance API", icono: <FaYahoo /> },
      { nombre: "Series Temporales", icono: <FaChartLine /> },
      { nombre: "Optimización de Portafolios", icono: <FaChartPie  /> },
      { nombre: "Análisis de Riesgos", icono: <FaProjectDiagram /> },
      { nombre: "Backtesting", icono: <FaChartLine  /> },
      { nombre: "Simulación Monte Carlo", icono: <FaDiceFive  /> }
    ]
  },
  {
    titulo: "Análisis Geoespacial y Teledetección",
    icono: <FaGlobeEurope className="text-yellow-600 text-3xl" />,
    herramientas: [
      { nombre: "GeoPandas", icono: <SiGeopandas /> },
      { nombre: "GDAL", icono: <SiGdal /> },
      { nombre: "Shapely", icono: <FaGlobeAmericas /> },
      { nombre: "SNAP", icono: <FaGlobeEurope /> },
      { nombre: "MODIS / Landsat / Sentinel", icono: <FaSatellite   /> },
    ]
  }
];

function TechStack() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12 animate-fade-in">Tech Stack y Áreas de Especialización</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10">
        {skills.map((bloque, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            className="bg-white shadow-md border border-gray-200 rounded-xl p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              {bloque.icono}
<               h2 className="text-xl font-semibold text-gray-800">{bloque.titulo}</h2>
            </div>
            <ul className="flex flex-wrap gap-4 mt-2">
              {bloque.herramientas.map((herr, j) => (
                <li
                  key={j}
                  className="flex items-center gap-2 text-gray-700 bg-gray-100 border border-gray-300 px-3 py-1 rounded-full text-sm"
                >
                  <span className="text-lg">{herr.icono}</span>
                  {herr.nombre}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default TechStack;
