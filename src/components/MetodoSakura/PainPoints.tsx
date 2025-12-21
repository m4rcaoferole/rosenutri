"use client";

import {
  Clock,
  FirstAidKit,
  Globe,
  Heart,
  HeartBreak,
  Lightning,
  Pill,
  Prohibit,
  Smiley,
  TrendDown
} from "@phosphor-icons/react";

const PAIN_POINTS = [
  {
    icon: Clock,
    text: "Você vive cansada, inchada e sem energia",
  },
  {
    icon: FirstAidKit,
    text: "Você sofre com TPM, intestino preso e cansaço constante",
  },
  {
    icon: Smiley,
    text: "Você sente culpa ao comer, mesmo quando faz tudo certo",
  },
];

const FAILED_ATTEMPTS = [
  {
    icon: Prohibit,
    text: "Dietas restritivas",
    reason: "tiram sua energia, te deixam irritada e acabam em compulsão",
  },
  {
    icon: Pill,
    text: "Suplementos e chás milagrosos",
    reason: "custam caro e te deixam frustrada",
  },
  {
    icon: Clock,
    text: "Academias e treinos aleatórios",
    reason: "não respeitam sua rotina de turnos",
  },
  {
    icon: Globe,
    text: "Dietas da internet",
    reason: "planos genéricos, muita informação solta, zero resultado",
  },
  {
    icon: TrendDown,
    text: "Medicação sem mudança de hábito",
    reason: "até funciona, mas sem bons hábitos o peso volta em dobro",
  },
];

export default function MetodoSakuraPainPoints() {
  return (
    <section className="relative overflow-hidden py-16">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray50 via-white to-shiro100" />

      {/* Decorative circles */}
      <div className="absolute -left-32 top-1/4 h-64 w-64 rounded-full bg-murasaki100/5 blur-3xl" />
      <div className="absolute -right-32 bottom-1/4 h-64 w-64 rounded-full bg-midori100/5 blur-3xl" />

      <div className="container relative z-10 mx-auto max-w-5xl px-6">
        {/* ========== SECTION 1: HOW ARE YOU FEELING ========== */}
        <div className="mb-20">
          {/* Header */}
          <div className="mb-10 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-murasaki100/30 bg-white px-5 py-2 shadow-sm">
              <HeartBreak size={20} className="text-murasaki200" weight="fill" />
              <span className="text-sm font-semibold text-murasaki200">
                VOCÊ SE IDENTIFICA?
              </span>
            </div>
            <h2 className="mb-4 text-3xl font-bold text-gray700 sm:text-4xl">
              Como você tem se sentido?
            </h2>
            <p className="mx-auto max-w-2xl text-gray500">
              Talvez você trabalhe em turnos trocados e seu corpo já não aguente
              mais. Talvez já tenha tentado de tudo — e nada parece funcionar.
            </p>
          </div>

          {/* Pain Points Grid */}
          <div className="mb-10 grid gap-6 md:grid-cols-3">
            {PAIN_POINTS.map((point, index) => {
              const Icon = point.icon;
              return (
                <div
                  key={index}
                  className="group rounded-2xl border border-gray300 bg-white p-6 shadow-sm transition-all hover:border-murasaki100 hover:shadow-lg"
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-murasaki100/10">
                    <Icon size={24} className="text-murasaki200" weight="fill" />
                  </div>
                  <p className="font-medium text-gray700">{point.text}</p>
                </div>
              );
            })}
          </div>

          {/* Realization Card */}
          <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl bg-white shadow-lg">
            <div className="bg-gradient-to-r from-murasaki200 to-murasaki300 px-6 py-4">
              <p className="text-center font-medium text-white">
                E, no fundo, começa a acreditar que o problema é você...
              </p>
            </div>
            <div className="p-8 text-center">
              <p className="mb-4 text-2xl font-bold text-murasaki300">
                Mas não é.
              </p>
              <p className="mb-6 text-gray700">
                O problema é que{" "}
                <strong className="text-murasaki300">
                  ninguém te ensinou a cuidar do corpo
                </strong>{" "}
                respeitando a rotina e a vida que você tem aqui no Japão.
              </p>
              <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-murasaki100/20 to-midori100/20 px-6 py-3">
                <Heart size={24} className="text-murasaki200" weight="fill" />
                <span className="font-semibold italic text-murasaki300">
                  Eu TE entendo — e foi exatamente por isso que criei o Método
                  Sakura.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ========== SECTION 2: WHY NOTHING WORKED ========== */}
        <div className="bg-gradient-to-b from-murasaki100/15 via-shiro100 to-white py-12">
          {/* Header - attention grabbing with typography */}
          <div className="mb-10 text-center">
            <h3 className="mb-6 text-3xl font-bold text-murasaki300 sm:text-4xl lg:text-5xl">
              Por que{" "}
              <span className="bg-gradient-to-r from-murasaki200 to-murasaki300 bg-clip-text text-transparent">
                nada funcionou
              </span>{" "}
              até agora?
            </h3>
            <div className="inline-block rounded-full border-2 border-murasaki100/30 bg-white px-6 py-3 shadow-sm">
              <p className="text-lg font-semibold text-murasaki200">
                O que você já tentou (e não deu certo)
              </p>
            </div>
          </div>

          {/* Failed Attempts - vertical stacked cards */}
          <div className="mx-auto mb-12 max-w-2xl space-y-4">
            {FAILED_ATTEMPTS.map((attempt, index) => (
              <div
                key={index}
                className="group cursor-default rounded-xl border-2 border-transparent bg-white p-5 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-murasaki100 hover:shadow-xl"
              >
                <p className="mb-1 text-lg font-bold text-gray700 transition-colors group-hover:text-murasaki300">
                  {attempt.text}
                </p>
                <p className="text-sm leading-relaxed text-gray500">
                  {attempt.reason}
                </p>
              </div>
            ))}
          </div>

          {/* Solution Card */}
          <div className="mx-auto max-w-2xl rounded-2xl border-2 border-murasaki100 bg-gradient-to-br from-murasaki100/10 to-white p-8 text-center shadow-lg">
            <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-murasaki100 to-murasaki200">
              <Lightning size={32} className="text-white" weight="fill" />
            </div>
            <p className="mb-3 text-xl font-bold text-murasaki300">
              O que faltava não era força de vontade.
            </p>
            <p className="text-gray700">
              Faltava um método que entendesse a{" "}
              <strong className="text-murasaki300">mulher real</strong> que você
              é — com trabalho, rotina puxada e sonhos que continuam vivos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
