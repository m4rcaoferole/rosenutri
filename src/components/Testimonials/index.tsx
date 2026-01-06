"use client";

import { CaretLeft, CaretRight, Star } from "@phosphor-icons/react";
import { useState } from "react";

const TESTIMONIALS = [
  {
    name: "Paciente do Método Sakura",
    location: "Japão",
    feedback:
      "...não me sentia bem nas fotografias, agora voltar a gostar de sair nas fotos.",
    rating: 5,
    initials: "🌸",
    bgColor: "bg-murasaki100",
  },
  {
    name: "Paciente do Método Sakura",
    location: "Brasil",
    feedback:
      "Mesmo sem seguir tudo perfeitamente, tive resultados reais: em 4 semanas perdi 8 kg e, depois, mais 2 kg. Já precisei ajustar minhas roupas três vezes — e tudo isso sem passar fome. Um processo leve, possível e muito eficiente.",
    rating: 5,
    initials: "🌸",
    bgColor: "bg-midori100",
  },
  {
    name: "Paciente do Método Sakura",
    location: "Austrália",
    feedback:
      "Minha nutricionista favorita. Me ajudou em um momento em que eu realmente precisava. Foi muito clara e atenciosa ao explicar cada ponto da alimentação e dos meus objetivos. As orientações são totalmente personalizadas, respeitando minha rotina, gostos e limitações. Mesmo ainda em acompanhamento, já percebo perda de peso constante, mais organização na rotina e muito mais controle da compulsão por comida e doces.",
    rating: 5,
    initials: "🌸",
    bgColor: "bg-murasaki200",
  },
  {
    name: "Latina no Japão",
    location: "Japão",
    feedback:
      "…Tengo 5 semanas en el tratamiento nutricional y ya he logrado bajar 7 kilos. La alimentación ha sido clave, sin necesidad de medicamentos para adelgazar. Rose siempre está pendiente y preguntando cómo me fue durante la semana. ¡Súper recomendada!",
    rating: 5,
    initials: "🌸",
    bgColor: "bg-midori200",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="mb-4 flex gap-1">
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          size={20}
          weight={i < rating ? "fill" : "regular"}
          className={i < rating ? "text-warning" : "text-gray300"}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length
    );
  };

  const currentTestimonial = TESTIMONIALS[currentIndex];

  return (
    <section id="testimonials" className="bg-gray50 py-16">
      <div className="container mx-auto max-w-4xl px-6">
        <h2 className="mb-2 text-center text-3xl font-bold text-murasaki200">
          O que dizem as pacientes
        </h2>
        <p className="mb-10 text-center text-gray500">
          Histórias reais de transformação e bem-estar
        </p>

        {/* Carousel Container */}
        <div className="relative">
          {/* Main Testimonial Card */}
          <div className="rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 md:p-10">
            <div className="flex flex-col items-center text-center md:flex-row md:items-start md:text-left">
              {/* Avatar */}
              <div
                className={`mb-6 flex h-20 w-20 shrink-0 items-center justify-center rounded-full text-2xl font-bold text-white md:mb-0 md:mr-8 ${currentTestimonial.bgColor}`}
              >
                {currentTestimonial.initials}
              </div>

              {/* Content */}
              <div className="flex-1">
                <StarRating rating={currentTestimonial.rating} />
                <blockquote className="mb-6 text-lg leading-relaxed text-gray700 italic">
                  &ldquo;{currentTestimonial.feedback}&rdquo;
                </blockquote>
                <div>
                  <p className="font-semibold text-murasaki300">
                    {currentTestimonial.name}
                  </p>
                  <p className="text-sm text-gray500">
                    {currentTestimonial.location}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              onClick={prevTestimonial}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md transition-all hover:bg-murasaki100 hover:text-white"
              aria-label="Depoimento anterior"
            >
              <CaretLeft size={24} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-3 w-3 rounded-full transition-all ${
                    index === currentIndex
                      ? "w-6 bg-murasaki200"
                      : "bg-gray300 hover:bg-murasaki100"
                  }`}
                  aria-label={`Ir para depoimento ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md transition-all hover:bg-murasaki100 hover:text-white"
              aria-label="Próximo depoimento"
            >
              <CaretRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
