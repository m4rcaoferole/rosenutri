"use client";

import { CaretLeft, CaretRight, Quotes, Star } from "@phosphor-icons/react";
import { useState } from "react";

const TESTIMONIALS = [
  {
    name: "Paciente do Método Sakura",
    location: "Japão",
    feedback:
      "Não me sentia bem nas fotografias, e agora voltei a gostar de sair nas fotos.",
    rating: 5,
    bgColor: "bg-murasaki200",
  },
  {
    name: "Paciente do Método Sakura",
    location: "Brasil",
    feedback:
      "Mesmo sem seguir tudo perfeitamente, tive resultados reais: em 4 semanas perdi 8 kg e, depois, mais 2 kg. Já precisei ajustar minhas roupas três vezes — e tudo isso sem passar fome. Um processo leve, possível e muito eficiente.",
    rating: 5,
    bgColor: "bg-midori100",
  },
  {
    name: "Paciente do Método Sakura",
    location: "Austrália",
    feedback:
      "Minha nutricionista favorita. Me ajudou em um momento em que eu realmente precisava. Foi muito clara e atenciosa ao explicar cada ponto da alimentação e dos meus objetivos. As orientações são totalmente personalizadas, respeitando minha rotina, gostos e limitações. Mesmo ainda em acompanhamento, já percebo perda de peso constante, mais organização na rotina e muito mais controle da compulsão por comida e doces.",
    rating: 5,
    bgColor: "bg-murasaki300",
  },
  {
    name: "Latina no Japão",
    location: "Japão",
    feedback:
      "Tengo 5 semanas en el tratamiento nutricional y ya he logrado bajar 7 kilos. La alimentación ha sido clave, sin necesidad de medicamentos para adelgazar. Rose siempre está pendiente y preguntando cómo me fue durante la semana. ¡Súper recomendada!",
    rating: 5,
    bgColor: "bg-midori200",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div
      className="mb-4 flex justify-center gap-1 md:justify-start"
      aria-label={`Avaliação ${rating} de 5 estrelas`}
    >
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          size={20}
          weight={i < rating ? "fill" : "regular"}
          className={i < rating ? "text-warning" : "text-gray300"}
          aria-hidden="true"
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
    <section id="testimonials" className="bg-gray50 py-16 lg:py-20">
      <div className="container mx-auto max-w-4xl px-6">
        <h2 className="mb-3 text-center font-serif text-3xl font-bold text-murasaki200 sm:text-4xl">
          O que dizem as pacientes
        </h2>
        <p className="mx-auto mb-10 max-w-2xl text-center text-base leading-relaxed text-gray500 sm:text-lg">
          Mulheres 40+ que vivem no Japão, com turnos e rotina puxada, contam
          como foi.
        </p>

        {/* Carousel Container */}
        <div className="relative">
          <div className="rounded-2xl border border-gray300/60 bg-white p-8 shadow-lg md:p-10">
            <div className="flex flex-col items-center text-center md:flex-row md:items-start md:text-left">
              {/* SVG Avatar Badge */}
              <div
                className={`mb-6 flex h-16 w-16 shrink-0 items-center justify-center rounded-full text-white md:mb-0 md:mr-8 md:h-20 md:w-20 ${currentTestimonial.bgColor}`}
                aria-hidden="true"
              >
                <Quotes size={32} weight="fill" />
              </div>

              {/* Content */}
              <div className="flex-1">
                <StarRating rating={currentTestimonial.rating} />
                <blockquote className="mb-6 text-base italic leading-relaxed text-gray700 sm:text-lg">
                  &ldquo;{currentTestimonial.feedback}&rdquo;
                </blockquote>
                <div>
                  <p className="text-base font-semibold text-murasaki300">
                    {currentTestimonial.name}
                  </p>
                  <p className="text-sm text-gray500">
                    {currentTestimonial.location}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls (44x44px+ accessible touch targets) */}
          <div className="mt-6 flex items-center justify-center gap-2">
            <button
              type="button"
              onClick={prevTestimonial}
              className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white text-murasaki200 shadow-md transition-colors duration-200 hover:bg-murasaki100 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-murasaki200"
              aria-label="Depoimento anterior"
            >
              <CaretLeft size={24} aria-hidden="true" />
            </button>

            <div className="flex items-center">
              {TESTIMONIALS.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setCurrentIndex(index)}
                  className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-murasaki200"
                  aria-label={`Ir para depoimento ${index + 1}`}
                  aria-current={index === currentIndex ? "true" : undefined}
                >
                  <span
                    className={`h-3 rounded-full transition-all duration-200 ${
                      index === currentIndex
                        ? "w-6 bg-murasaki200"
                        : "w-3 bg-gray300 hover:bg-murasaki100"
                    }`}
                  />
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={nextTestimonial}
              className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white text-murasaki200 shadow-md transition-colors duration-200 hover:bg-murasaki100 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-murasaki200"
              aria-label="Próximo depoimento"
            >
              <CaretRight size={24} aria-hidden="true" />
            </button>
          </div>

          <p className="mt-6 text-center text-sm text-gray500">
            Depoimentos reais de pacientes. Resultados variam de pessoa para
            pessoa.
          </p>
        </div>
      </div>
    </section>
  );
}
