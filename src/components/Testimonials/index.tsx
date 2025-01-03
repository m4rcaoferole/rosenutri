import { StarIcon } from '@heroicons/react/24/outline';
import React from 'react';

export default function Testimonials() {

  const testimonials = [
    {
      name: "Maria Silva",
      feedback: "A [Nome da Nutricionista] transformou minha relação com a comida. Hoje me sinto mais saudável e feliz!",
      rating: 5,
    },
    {
      name: "João Souza",
      feedback: "Profissional atenciosa e dedicada. Recomendo para quem busca uma vida mais equilibrada.",
      rating: 5,
    },
    {
      name: "Ana Pereira",
      feedback: "Com planos personalizados, consegui alcançar meus objetivos de forma sustentável.",
      rating: 4,
    },
  ];
  
  return (
    <section id="testimonials" className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-murasaki200 mb-8">Depoimentos</h2>
        <div className="space-y-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6">
              {/* Avaliação em estrelas */}
              <div className="flex justify-center mb-4">
                {Array.from({ length: 5 }, (_, i) => (
                  <StarIcon
                    key={i}
                    className={`h-5 w-5 ${
                      i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <p className="text-gray-700 italic mb-4">"{testimonial.feedback}"</p>
              <p className="text-green-700 font-semibold">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}