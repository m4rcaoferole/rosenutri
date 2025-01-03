import React from 'react';

import { AcademicCapIcon, HeartIcon, UserGroupIcon } from '@heroicons/react/24/outline';



export default function AboutNutri() {
  return (
    <section id="about" className="bg-white py-16">
      <div className="container mx-auto px-6 text-center flex items-center flex-col">
        <h2 className="text-3xl font-bold text-murasaki300 mb-8">Sobre a Nutri</h2>
        <div className="flex flex-col gap-4 items-center md:flex-row md: md:space-x-8">
          <div className="mb-8 md:mb-0">
            <img
              src="https://plus.unsplash.com/premium_photo-1661396861110-7041a3dff0af?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Nutricionista"
              className="w-80 h-80 rounded-full object-cover border-2 border-murasaki200 shadow-lg shadow-murasaki100/40"
            />
          </div>

          {/* Informações */}
          <div className="max-w-lg">
            <p className="text-gray-700 text-left mb-6 font-medium text-lg">
              Olá! Sou Rosemary, formada em Nutrição pela Universidade Federal de Mato Grosso. Com mais de 10 anos de experiência, ajudo meus clientes a alcançarem uma vida mais saudável e equilibrada através de planos alimentares personalizados.
            </p>
            <p className="text-gray-700 text-left mb-6 font-medium text-lg">
              Minha abordagem é centrada no bem-estar integral, combinando conhecimentos científicos com práticas sustentáveis para garantir resultados duradouros.
            </p>

            {/* Valores ou Especialidades */}
            <div className="flex flex-col items-start space-y-4">
              <div className="flex items-center space-x-4">
                <AcademicCapIcon className="h-10 w-10 text-green-600" />
                <span className="text-gray-700">Formação Acadêmica</span>
              </div>
              <div className="flex items-center space-x-4">
                <UserGroupIcon className="h-10 w-10 text-green-600" />
                <span className="text-gray-700">Atendimento Personalizado</span>
              </div>
              <div className="flex items-center space-x-4">
                <HeartIcon className="h-10 w-10 text-green-600" />
                <span className="text-gray-700">Compromisso com a Saúde</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
