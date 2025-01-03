import React from 'react'

export default function Consultation() {
  return (
    <section id="consultation" className="bg-white py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-murasaki200 mb-8">Consulta Online</h2>
        <p className="text-gray-700 font-medium mb-8">
          Consultas online para sua comodidade. Agende sua consulta de qualquer lugar e receba orientação personalizada.
        </p>
        <a
          href="#contact"
          className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
        >
          Agendar Consulta
        </a>
      </div>
    </section>
  )
}
