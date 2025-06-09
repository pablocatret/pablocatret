import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Proyectos() {
  const proyectos = [
    {
      titulo: "GenAI AWS Support Chatbot",
      descripcion: "Asistente conversacional inteligente basado en RAG y GPT-4.1 para responder preguntas técnicas sobre AWS a partir de documentación interna en PDF. Incluye procesamiento semántico con MiniLM, búsqueda con ChromaDB y una interfaz web interactiva con Gradio.",
      tecnologias: ["Python", "GPT-4.1", "ChromaDB", "Gradio", "MiniLM"],
      categorias: ["NLP", "LLMs", "RAG"]
    },

    // Finanzas


    {
      titulo: "Pipeline financiero con Airflow",
      descripcion: "Pipeline completo para series temporales financieras, desarrollado en un entorno dockerizado con Apache Airflow. Incluye la ingesta desde APIs públicas, detección automática de anomalías, transformación y almacenamiento en bases de datos PostgreSQL.",
      tecnologias: ["Python", "Airflow", "PostgreSQL", "Docker"],
      categorias: ["Finanzas", "Data Engineering"]
    },
    {
      titulo: "Predicción bursátil con RNNs",
      descripcion: "Diseño de modelos secuenciales (RNN, LSTM y GRU) para la predicción de precios y generación de señales de trading en múltiples activos financieros. Incluye estrategias de inversión simuladas y análisis de rendimiento con métricas como Sharpe y drawdown.",
      tecnologias: ["Python", "TensorFlow", "Keras", "Yahoo Finance API"],
      categorias: ["Finanzas"]
    },
    {
      titulo: "Optimizador de carteras con Yahoo Finance",
      descripcion: "Desarrollo de un optimizador de carteras de inversión basado en la teoría moderna de carteras y datos extraídos de Yahoo Finance. Incluye análisis de riesgos, simulación de escenarios y visualización de fronteras eficientes.",
      tecnologias: ["Python", "Pandas", "NumPy", "Scipy", "Yahoo Finance API"],
      categorias: ["Finanzas"]
    },

    // Ciencia de datos y ML
    {
      titulo: "ML Pipeline en AWS",
      descripcion: "Despliegue completo de pipelines de Machine Learning en AWS con integración de S3, Lambda y SageMaker. Automatiza el preprocesado, entrenamiento, evaluación y puesta en producción de modelos con inferencia en tiempo real.",
      tecnologias: ["AWS", "SageMaker", "Lambda", "S3"],
      categorias: ["Ciencia de Datos y ML", "Data Engineering"]
    },
    {
      titulo: "Sistema de recomendación para supermercado",
      descripcion: "Desarrollo de un recomendador de productos para el sector retail como parte del Workshop Capgemini Millennial Garage 2023-24. El proyecto se enfoca en optimizar el ticket medio y el tamaño de la cesta de compra, mediante la recomendación inteligente de pedidos y clientes con patrones de compra similares.",
      tecnologias: ["Python", "Pandas", "Numpy", "Scikit-learn"],
      categorias: ["Ciencia de Datos y ML"]
    },
    {
      titulo: "Análisis de riesgo cardíaco con Naïve Bayes",
      descripcion: "Clasificador supervisado para identificar pacientes con riesgo elevado de enfermedad cardíaca. Expuesto en las jornadas VaDeProb! #3 de la Universidad de Valencia.",
      tecnologias: ["R", "Naive Bayes", "TidyR", "Dplyr"],
      categorias: ["Ciencia de Datos y ML"]
    },
    {
      titulo: "Detección de talentos en motorsport",
      descripcion: "Uso de métodos de ensemble y técnicas de análisis multivariable para identificar futuras promesas del automovilismo a partir de categorías inferiores.",
      tecnologias: ["Scikit-learn", "XGBoost", "Pandas"],
      categorias: ["Ciencia de Datos y ML"]
    },
    {
      titulo: "Dashboard clínico en Dash",
      descripcion: "Aplicación en Dash para la visualización de métricas clínicas, evolución y predicción de riesgos en pacientes con cardiopatías.",
      tecnologias: ["Python", "Plotly Dash", "Pandas"],
      categorias: ["Ciencia de Datos y ML"]
    },
    {
      titulo: "Visualización 3D de corazones post-ablación",
      descripcion: "Reconstrucción 3D de corazones tras procedimientos de ablación cardiaca usando PyVista para análisis visual y exploración médica.",
      tecnologias: ["PyVista", "NumPy", "VTK"],
      categorias: ["Ciencia de Datos y ML"]
    },
    {
      titulo: "Scraping y análisis de medios con NLP",
      descripcion: "Web scraping automatizado de medios de comunicación españoles, clasificación temática, análisis de sentimientos y uso de transformers para NLP avanzado.",
      tecnologias: ["BeautifulSoup", "HuggingFace Transformers", "Scikit-learn", "NLP"],
      categorias: ["Ciencia de Datos y ML"]
    },

    // Medio ambiente y predicción
    {
      titulo: "Pronóstico de CO₂ en distintos land covers",
      descripcion: "Modelos avanzados como Prophet, N-HiTS y TCN para la predicción de concentraciones de CO₂ en diferentes tipos de cobertura terrestre, usando datos de la red ICOS.",
      tecnologias: ["Prophet", "N-HiTS", "TCN", "Darts", "ICOS"],
      categorias: ["Medio Ambiente", "Ciencia de Datos y ML"]
    },
    {
      titulo: "Predicción de flujos de eddy covariance con XAI",
      descripcion: "Modelado de flujos fundamentales mediante ML e interpretación con SHAP. Aplicación de técnicas de Explainable AI para entender la contribución de variables ambientales en ecosistemas naturales.",
      tecnologias: ["Scikit-learn", "XGBoost", "SHAP"],
      categorias: ["Medio Ambiente", "Ciencia de Datos y ML"]
    },
    {
      titulo: "ETL de estación de Eddy Covariance",
      descripcion: "Diseño de procesos automáticos de limpieza, preprocesado y estructuración de datos provenientes de la estación EC de la VAS. Integración con pipelines de análisis y predicción.",
      tecnologias: ["Python", "Pandas", "ETL"],
      categorias: ["Medio Ambiente", "Data Engineering"]
    },
    {
      titulo: "Pipelines automáticos de datos satelitales y teledetección",
      descripcion: "Automatización de la descarga, recorte, procesamiento y almacenamiento de imágenes satelitales desde APIs de MODIS (Aqua y Terra), Landsat 7 y 8, Sentinel 2, 3 y 5 para estudios medioambientales. Se garantiza la conservación de metadatos para asegurar la trazabilidad y calidad de los datos procesados.",
      tecnologias: ["Python", "GDAL", "SNAP", "Shapely", "Geopandas"],
      categorias: ["Medio Ambiente", "Data Engineering"]
    },

    // Otros
    {
      titulo: "Análisis de riesgos laborales en España",
      descripcion: "Estudio exploratorio data-driven sobre riesgos laborales, analizando patrones y tendencias según sector económico y región. Se emplean técnicas de minería de datos y modelos analíticos para identificar factores críticos, optimizar la gestión preventiva y mejorar la toma de decisiones basada en evidencia..",
      tecnologias: ["Python", "Pandas", "Seaborn", "Matplotlib"],
      categorias: ["Otros"]
    },
    {
      titulo: "Libro: A/B Testing práctico",
      descripcion: "Autoría del libro 'A/B Testing: Guía Práctica para Resultados Reales', orientado a profesionales del marketing y la analítica para mejorar decisiones mediante experimentación controlada.",
      tecnologias: ["Estadística", "A/B Testing", "Inferencia Causal"],
      categorias: ["Otros"]
    }
  ];

  const categoriasUnicas = [...new Set(proyectos.flatMap((p) => p.categorias))];
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Todos');

  const proyectosFiltrados =
    categoriaSeleccionada === 'Todos'
      ? proyectos
      : proyectos.filter((p) => p.categorias.includes(categoriaSeleccionada));

  return (
    <section className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-10 animate-fade-in">Proyectos Destacados</h1>

      <div className="flex justify-center flex-wrap gap-4 mb-10">
        <button
          onClick={() => setCategoriaSeleccionada('Todos')}
          className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-200 ${
            categoriaSeleccionada === 'Todos'
              ? 'bg-blue-600 text-white border-blue-600'
              : 'bg-white text-blue-600 border-blue-600 hover:bg-blue-100'
          }`}
        >
          Todos
        </button>
        {categoriasUnicas.map((cat, i) => (
          <button
            key={i}
            onClick={() => setCategoriaSeleccionada(cat)}
            className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-200 ${
              categoriaSeleccionada === cat
                ? 'bg-blue-600 text-white border-blue-600'
                : 'bg-white text-blue-600 border-blue-600 hover:bg-blue-100'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {proyectosFiltrados.map((proyecto, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-lg rounded-xl p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{proyecto.titulo}</h2>
            <p className="text-gray-700 text-sm mb-3 leading-relaxed">{proyecto.descripcion}</p>
            <div className="flex flex-wrap gap-2 mb-3">
              {proyecto.tecnologias.map((tech, i) => (
                <span
                  key={i}
                  className="bg-gray-100 border border-gray-300 text-gray-800 text-xs px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="text-xs text-blue-600 font-semibold">
              {proyecto.categorias.join(', ')}
            </div>
          </motion.div>
        ))}
      </div>
      <motion.p
        className="text-sm text-gray-600 text-center mt-10 max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <strong>Nota:</strong> Algunos proyectos relevantes no se muestran aquí por motivos de <em>confidencialidad</em>, investigaciones en curso u otras restricciones. Si estás interesado en conocer más detalles, no dudes en <a href="/contacto" className="text-blue-600 underline">contactarme</a>.
      </motion.p>


    </section>
  );
}

export default Proyectos;
