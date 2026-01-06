"use client";

import { CheckCircle, Flower, Heart, Sparkle } from "@phosphor-icons/react";

const PHILOSOPHY_POINTS = [
  {
    icon: Heart,
    text: "Nada de dietas restritivas ou promessas milagrosas",
  },
  {
    icon: Sparkle,
    text: "Respeito aos seus gostos e à sua cultura alimentar",
  },
  {
    icon: CheckCircle,
    text: "Foco em resultados sustentáveis e duradouros",
  },
  {
    icon: Flower,
    text: "Alimentação flexível, adaptada à sua rotina real",
  },
  {
    icon: Heart,
    text: "Acolhimento e suporte contínuo durante todo o processo",
  },
  {
    icon: Sparkle,
    text: "Leveza, consciência e constância como pilares do cuidado",
  },
];

const QUOTES = [
  {
    text: "Uma alimentação saudável precisa ser possível, prazerosa e sustentável.",
    highlight: false,
  },
];

export default function Philosophy() {
  return (
    <section className="relative overflow-hidden py-16">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-murasaki100/20 via-shiro100 to-midori100/15" />

      {/* Decorative elements */}
      <div className="absolute left-10 top-10 text-5xl opacity-15">🌸</div>
      <div className="absolute bottom-10 right-20 text-4xl opacity-10">🌸</div>
      <div className="absolute -right-20 top-1/2 h-64 w-64 rounded-full bg-murasaki100/10 blur-3xl" />
      <div className="absolute -left-20 bottom-0 h-48 w-48 rounded-full bg-midori100/10 blur-3xl" />

      <div className="container relative z-10 mx-auto max-w-5xl px-6">
        {/* Header */}
        <div className="mb-12 text-center">          
          <h2 className="mb-4 text-3xl font-bold text-murasaki200 sm:text-4xl">
            Minha Filosofia de Cuidado
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray700">
            Acredito em uma nutrição que transforma vidas sem sofrimento.
            Inspirada no ciclo da Sakura, onde cada fase tem seu tempo e sua
            beleza.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Quotes Card */}
          <div className="rounded-2xl bg-white p-8 shadow-xl">
            <h3 className="mb-6 text-lg font-semibold text-murasaki200">
              Palavras que guiam meu trabalho
            </h3>

            <div className="space-y-6">
              {QUOTES.map((quote, index) => (
                <blockquote
                  key={index}
                  className={`rounded-xl p-5 ${
                    quote.highlight
                      ? "border-2 border-murasaki100 bg-gradient-to-r from-murasaki100/10 to-transparent"
                      : "bg-gray50"
                  }`}
                >
                  <p
                    className={`text-lg italic leading-relaxed ${
                      quote.highlight ? "text-murasaki300" : "text-gray700"
                    }`}
                  >
                    &ldquo;{quote.text}&rdquo;
                  </p>
                </blockquote>
              ))}
            </div>

            <p className="mt-6 text-right text-sm text-gray500">
              — Rosemary Azuma
            </p>
          </div>

          {/* Philosophy Points */}
          <div className="rounded-2xl bg-white p-8 shadow-xl">
            <h3 className="mb-6 text-lg font-semibold text-murasaki200">
              O que você encontra no meu cuidado
            </h3>

            <div className="space-y-4">
              {PHILOSOPHY_POINTS.map((point, index) => {
                const Icon = point.icon;
                return (
                  <div
                    key={index}
                    className="group flex items-center gap-4 rounded-xl bg-gray50 p-4 transition-all hover:bg-murasaki100/10"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-murasaki100/20 to-midori100/20">
                      <Icon
                        size={20}
                        weight="fill"
                        className="text-murasaki200 transition-colors group-hover:text-murasaki300"
                      />
                    </div>
                    <span className="font-medium text-gray700">
                      {point.text}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="mb-6 text-lg text-gray700">
            Pronta para começar sua transformação com leveza e propósito?
          </p>
          <a
            href="https://wa.me/819038354891?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20acompanhamento%20nutricional."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-murasaki200 to-murasaki300 px-8 py-4 font-bold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl"
          >
            🌸 Vamos conversar
          </a>
        </div>
      </div>
    </section>
  );
}
