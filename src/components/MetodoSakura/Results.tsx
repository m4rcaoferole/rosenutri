"use client";

import { Brain, Heart, Sparkle } from "@phosphor-icons/react";

const RESULTS = [
  {
    title: "No corpo",
    icon: Heart,
    color: "from-murasaki100 to-murasaki200",
    items: [
      "Emagrecimento real e consistente",
      "Intestino regulado e menos inchaço",
      "Melhor qualidade do sono e energia renovada",
      "TPM e sintomas hormonais reduzidos",
    ],
  },
  {
    title: "Na mente",
    icon: Brain,
    color: "from-midori100 to-midori200",
    items: [
      "Fim da culpa ao comer",
      "Paz e consciência alimentar",
      "Autoestima fortalecida",
      "Clareza e leveza emocional",
    ],
  },
  {
    title: "Na vida",
    icon: Sparkle,
    color: "from-shiro300 to-warning",
    items: [
      "Equilíbrio entre rotina e autocuidado",
      "Pertencimento e motivação",
      "Orgulho da própria jornada",
    ],
  },
];

export default function MetodoSakuraResults() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-shiro100 to-white py-16">
      {/* Decorative elements */}
      <div className="absolute -left-20 top-1/3 h-64 w-64 rounded-full bg-murasaki100/5 blur-3xl" />
      <div className="absolute -right-20 bottom-1/4 h-48 w-48 rounded-full bg-midori100/5 blur-3xl" />

      <div className="container relative z-10 mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
            <span className="bg-gradient-to-r from-murasaki200 to-murasaki300 bg-clip-text text-transparent">
              Transformação Completa
            </span>
          </h2>
          <p className="mx-auto max-w-xl text-lg text-gray700">
            Resultados esperados em{" "}
            <strong className="text-murasaki300">90 dias</strong>
          </p>
        </div>

        {/* Results Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {RESULTS.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="group rounded-2xl bg-white p-6 shadow-lg transition-all hover:shadow-xl"
              >
                {/* Header */}
                <div
                  className={`mb-6 inline-flex items-center gap-3 rounded-xl bg-gradient-to-r ${category.color} px-4 py-2`}
                >
                  <Icon size={24} className="text-white" weight="fill" />
                  <h3 className="font-bold text-white">{category.title}</h3>
                </div>

                {/* Items */}
                <ul className="space-y-3">
                  {category.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-gray700"
                    >
                      <span className="mt-1 text-murasaki200">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
