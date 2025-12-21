"use client";

import { Brain, Calendar, Flower, Handshake, Users } from "@phosphor-icons/react";

const METHOD_UNITES = [
  {
    icon: Calendar,
    text: "Nutrição adaptada à sua rotina e aos seus turnos",
  },
  {
    icon: Brain,
    text: "Estratégias comportamentais para equilibrar emoções e não descontar na comida",
  },
  {
    icon: Handshake,
    text: "Acolhimento humano e estratégico — porque aqui você não caminha sozinha",
  },
  {
    icon: Users,
    text: "Resultados reais de mulheres que vivem a mesma jornada que você",
  },
];

export default function MetodoSakuraIntro() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-gradient-to-br from-murasaki100/25 via-shiro100 to-murasaki100/15 py-16"
    >
      {/* Decorative sakura elements */}
      <div className="absolute left-10 top-20 text-6xl opacity-20">🌸</div>
      <div className="absolute right-20 top-40 text-4xl opacity-15">🌸</div>
      <div className="absolute bottom-10 left-1/4 text-5xl opacity-10">🌸</div>
      <div className="absolute -right-10 bottom-20 h-64 w-64 rounded-full bg-murasaki100/10 blur-3xl" />
      <div className="absolute -left-20 top-0 h-48 w-48 rounded-full bg-shiro200/30 blur-3xl" />

      <div className="container relative z-10 mx-auto max-w-5xl px-6">
        <div className="text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-murasaki100/20 px-5 py-2 shadow-sm">
            <Flower size={24} className="text-murasaki200" weight="fill" />
            <span className="font-semibold text-murasaki200">
              CONHEÇA O MÉTODO
            </span>
          </div>

          {/* Title */}
          <h2 className="mb-6 text-4xl font-bold text-murasaki200 sm:text-5xl">
            Método Sakura
          </h2>

          {/* Description */}
          <p className="mx-auto mb-8 max-w-3xl text-lg leading-relaxed text-gray700">
            O <strong className="text-murasaki300">Método Sakura</strong> é um
            Programa Nutricional de{" "}
            <strong className="text-murasaki300">90 dias</strong> criado para
            mulheres brasileiras e latinas que vivem no Japão e desejam
            emagrecer com leveza, consciência e constância —{" "}
            <em>sem dietas impossíveis e sem culpa.</em>
          </p>

          {/* Inspiration Card */}
          <div className="mx-auto max-w-3xl rounded-2xl border border-murasaki100/40 bg-white/80 p-8 shadow-lg backdrop-blur-sm">
            <p className="mb-6 text-gray700">
              Inspirado no ciclo da flor de cerejeira{" "}
              <span className="text-xl">🌸</span>{" "}
              <strong className="text-murasaki200">(Sakura)</strong> — símbolo
              japonês de renovação e recomeço — o método une:
            </p>

            {/* Method Unites Items */}
            <div className="mb-8 grid gap-4 text-left sm:grid-cols-2">
              {METHOD_UNITES.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="flex items-start gap-3 rounded-xl bg-gradient-to-r from-murasaki100/15 to-transparent p-4"
                  >
                    <Icon
                      size={24}
                      className="mt-0.5 shrink-0 text-murasaki200"
                    />
                    <span className="text-sm text-gray700">{item.text}</span>
                  </div>
                );
              })}
            </div>

            {/* Promise */}
            <div className="rounded-xl bg-gradient-to-r from-midori100/15 to-midori100/5 p-6">
              <p className="mb-4 text-gray700">
                Aqui, você não recebe apenas um plano alimentar.
                <br />
                <strong className="text-murasaki300">
                  Você recebe um processo de transformação completa
                </strong>{" "}
                — no corpo, na mente e na forma de viver.
              </p>
              <p className="text-lg font-semibold italic text-murasaki200">
                "O florescer da mulher começa quando ela decide cuidar de si com
                leveza."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
