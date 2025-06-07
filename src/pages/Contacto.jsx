import React from 'react';
import { Mail, Linkedin, MapPin, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

function Contacto() {
  return (
    <section className="min-h-screen bg-white flex items-center justify-center px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="max-w-xl w-full border border-gray-200 rounded-xl shadow-lg p-10 text-center bg-gray-50"
      >
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Ponte en contacto</h1>
        <p className="text-gray-700 text-md mb-10 leading-relaxed">
          ¿Buscas a alguien con visión analítica, capacidad técnica y experiencia en datos para transformar retos complejos en soluciones prácticas?
          Escríbeme. Estoy abierto a colaborar, asesorar o iniciar nuevos proyectos.
        </p>

        <div className="space-y-6 text-left">
          <div className="flex items-center gap-4">
            <Mail className="w-6 h-6 text-blue-600" />
            <div>
              <p className="text-sm text-gray-600">Correo electrónico</p>
              <p className="text-gray-800 font-medium">pablo.catret@gmail.com</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Linkedin className="w-6 h-6 text-blue-600" />
            <div>
              <p className="text-sm text-gray-600">LinkedIn</p>
              <a
                href="https://www.linkedin.com/in/pablocatret"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:underline font-medium"
              >
                linkedin.com/in/pablo-catret
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <MapPin className="w-6 h-6 text-blue-600" />
            <div>
              <p className="text-sm text-gray-600">Ubicación</p>
              <p className="text-gray-800 font-medium">Valencia, España</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Briefcase className="w-6 h-6 text-blue-600" />
            <div>
              <p className="text-sm text-gray-600">Disponibilidad</p>
              <p className="text-gray-800 font-medium">Abierto a colaboraciones y nuevas oportunidades</p>
            </div>
          </div>
        </div>

        <p className="mt-10 text-sm text-gray-400 italic">
          Suelo responder en menos de 24h. Gracias por tu interés.
        </p>
      </motion.div>
    </section>
  );
}

export default Contacto;
