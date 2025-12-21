"use client";

import {
  Brain,
  Butterfly,
  Heartbeat,
  Leaf
} from "@phosphor-icons/react";

const SPECIALTIES = [
  {
    icon: Butterfly,
    title: "Saúde da Mulher",
    description:
      "Acompanhamento nutricional focado nas necessidades femininas em cada fase da vida: TPM, menopausa, gestação e pós-parto.",
    color: "text-murasaki200",
    bgColor: "bg-murasaki100/10",
  },
  {
    icon: Heartbeat,
    title: "Emagrecimento Sustentável",
    description:
      "Perda de peso de forma saudável e duradoura, sem dietas restritivas. Foco em reeducação alimentar e mudança de hábitos.",
    color: "text-error",
    bgColor: "bg-error/10",
  },
  {
    icon: Leaf,
    title: "Reeducação Alimentar",
    description:
      "Aprenda a fazer escolhas alimentares conscientes que se encaixam na sua rotina e respeitam seus gostos pessoais.",
    color: "text-midori100",
    bgColor: "bg-midori100/10",
  },
  {
    icon: Brain,
    title: "Alimentação e Bem-estar",
    description:
      "Nutrição como aliada da saúde mental e emocional. Estratégias para reduzir ansiedade, compulsão e melhorar a qualidade de vida.",
    color: "text-murasaki300",
    bgColor: "bg-murasaki300/10",
  },
  // {
  //   icon: Barbell,
  //   title: "Nutrição Esportiva",
  //   description:
  //     "Otimize seu desempenho físico com alimentação adequada para treinos, recuperação muscular e objetivos esportivos.",
  //   color: "text-midori200",
  //   bgColor: "bg-midori200/10",
  // },
  // {
  //   icon: Baby,
  //   title: "Nutrição Materno-Infantil",
  //   description:
  //     "Acompanhamento desde a pré-concepção, gestação, amamentação até a introdução alimentar do bebê.",
  //   color: "text-warning",
  //   bgColor: "bg-warning/10",
  // },
];

export default function Specialties() {
  return (
    <section id="specialties" className="bg-white py-16">
      <div className="container mx-auto max-w-6xl px-6">
        <h2 className="mb-2 text-center text-3xl font-bold text-murasaki200">
          Áreas de Atuação
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-gray500">
          Atendimento especializado para diferentes necessidades e objetivos
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SPECIALTIES.map((specialty, index) => {
            const Icon = specialty.icon;
            return (
              <div
                key={index}
                className="group rounded-xl border border-gray100 bg-white p-6 shadow-sm transition-all duration-300 hover:border-murasaki100 hover:shadow-lg"
              >
                <div
                  className={`mb-4 inline-flex rounded-lg p-3 ${specialty.bgColor}`}
                >
                  <Icon size={32} className={specialty.color} weight="duotone" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-gray700 transition-colors group-hover:text-murasaki200">
                  {specialty.title}
                </h3>
                <p className="leading-relaxed text-gray500">
                  {specialty.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
