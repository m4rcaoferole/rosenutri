"use client";

import {
  Flower,
  Heart,
  Lightning,
  Moon,
  Scales,
  Sparkle
} from "@phosphor-icons/react";

const BENEFITS = [
  {
    icon: Scales,
    text: "Emagrecer de forma consciente e sustentável",
  },
  {
    icon: Heart,
    text: "Regular o intestino, o sono e os hormônios",
  },
  {
    icon: Lightning,
    text: "Acabar com o efeito sanfona e as dietas restritivas",
  },
  {
    icon: Sparkle,
    text: "Ter mais energia, disposição e leveza",
  },
  {
    icon: Moon,
    text: "Voltar a se olhar no espelho com orgulho e tranquilidade",
  },
];

export default function MetodoSakuraSolution() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-murasaki100/10 to-shiro100 py-16">
      {/* Decorative elements */}
      <div className="absolute -left-20 top-1/4 h-64 w-64 rounded-full bg-murasaki100/10 blur-3xl" />
      <div className="absolute -right-20 bottom-1/4 h-48 w-48 rounded-full bg-midori100/10 blur-3xl" />

      <div className="container relative z-10 mx-auto max-w-5xl px-6">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
            <span className="text-murasaki300">O </span>
            <span className="bg-gradient-to-r from-murasaki200 to-murasaki300 bg-clip-text text-transparent">
              MÉTODO SAKURA
            </span>
          </h2>

          <p className="mx-auto max-w-2xl text-lg text-gray700">
            Um programa completo de{" "}
            <strong className="text-murasaki300">90 dias</strong> para
            reconectar você ao seu corpo, seu ritmo e seu equilíbrio natural.
          </p>
        </div>

        {/* Benefits Section */}
        <div className="mb-12">
          <div className="mb-8 text-center">
            <p className="text-lg font-semibold text-murasaki200">
              Você vai:
            </p>
          </div>

          <div className="mx-auto max-w-3xl space-y-4">
            {BENEFITS.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="group flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-x-1 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-murasaki100/20 to-midori100/20">
                    <Icon
                      size={24}
                      className="text-murasaki200 transition-colors group-hover:text-murasaki300"
                      weight="duotone"
                    />
                  </div>
                  <p className="text-lg font-medium text-gray700 transition-colors group-hover:text-murasaki300">
                    {benefit.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Quote Card */}
        <div className="mx-auto max-w-3xl rounded-2xl border-2 border-murasaki100/30 bg-white p-8 text-center shadow-lg">
          <Flower size={40} className="mx-auto mb-4 text-murasaki200" weight="fill" />
          <p className="text-xl font-medium italic text-gray700 sm:text-2xl">
            "Em 90 dias, recupere energia, leveza e autoconfiança — com um
            método que respeita o seu ritmo, o seu corpo e a sua vida."
          </p>
        </div>
      </div>
    </section>
  );
}
