import React from 'react';

export default function NutriSection() {
  return (
    <section className="bg-white">
      {/* Background Decoration */}

      <div className="container mx-auto flex flex-col items-center justify-center py-20 px-5 text-center md:px-10">
        {/* Título e Subtítulo */}
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl">
        Emagreça com <span className="text-murasaki300">leveza</span> e <span className="text-murasaki300">equilíbrio</span>.
        </h1>
        <h2 className="mt-5 text-lg font-bold text-midori300 sm:text-xl">
          Transforme seu corpo e sua rotina com saúde
        </h2>
         <p className="mt-5 text-lg text-gray-700 sm:text-xl">
          Consultoria nutricional personalizada para uma vida mais saudável e equilibrada.
        </p>

        {/* Call to Action (Botões) */}
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="#services"
            className="rounded-lg bg-green-600 px-6 py-3 text-white font-semibold shadow-md hover:bg-green-700 transition"
          >
            Conheça os Serviços
          </a>
          <a
            href="#contact"
            className="rounded-lg border border-green-600 px-6 py-3 text-green-600 font-semibold shadow-md hover:bg-green-50 transition"
          >
            Fale Conosco
          </a>
        </div>
      </div>
    </section>
  );
}
