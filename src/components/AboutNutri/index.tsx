"use client";

import { Flower, GlobeHemisphereWest, Heart, Sparkle, Star } from "@phosphor-icons/react";
import Image from "next/image";

import nutriPhoto from "@/assets/nutri_2.png";

const CREDENTIALS = [
  {
    icon: Star,
    text: "Nutricionista há mais de 17 anos",
  },
  {
    icon: Sparkle,
    text: "Especialista em Emagrecimento e Saúde da Mulher",
  },
  {
    icon: GlobeHemisphereWest,
    text: "Pós-graduada em Obesidade e Emagrecimento",
  },
  {
    icon: Heart,
    text: "Criadora do Método Sakura",
  },
];

export default function AboutNutri() {
  return (
    <section id="about" className="relative overflow-hidden py-16">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-murasaki100/10 via-white to-shiro100" />

      {/* Decorative elements */}
      <div className="absolute -right-20 top-1/4 h-64 w-64 rounded-full bg-murasaki100/10 blur-3xl" />
      <div className="absolute -left-20 bottom-1/4 h-48 w-48 rounded-full bg-midori100/5 blur-3xl" />

      <div className="container relative z-10 mx-auto max-w-5xl px-6">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-murasaki100/15 px-5 py-2">
            <Flower size={20} className="text-murasaki200" weight="fill" />
            <span className="font-semibold text-murasaki200">
              QUEM É A NUTRI
            </span>
          </div>
          <h2 className="text-3xl font-bold text-murasaki300 sm:text-4xl">
            Conheça a Rose Azuma
          </h2>
        </div>

        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-start">
          {/* Photo */}
          <div className="shrink-0">
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-murasaki100 to-murasaki200 opacity-20 blur-2xl" />
              <Image
                src={nutriPhoto}
                alt="Nutricionista Rosemary Azuma"
                width={380}
                height={450}
                className="relative h-auto w-72 rounded-2xl border-4 border-white object-cover shadow-2xl lg:w-80"
              />
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-xl bg-gradient-to-r from-murasaki200 to-murasaki300 px-6 py-3 text-center shadow-lg">
                <span className="text-sm font-semibold text-white">
                  Rose Azuma
                </span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <h3 className="mb-2 text-3xl font-bold text-murasaki300">
              Rose Azuma
            </h3>
            <p className="mb-6 text-lg font-medium text-midori100">
              Nutricionista | Especialista em Emagrecimento e Saúde da Mulher
            </p>

            <div className="mb-8 space-y-4 text-gray700">
              <p className="text-lg leading-relaxed">
                Eu sou <strong className="text-murasaki300">Rose Azuma</strong>,
                nutricionista há mais de{" "}
                <strong className="text-murasaki300">17 anos</strong>,
                especialista em emagrecimento e saúde da mulher.
              </p>
              <p className="leading-relaxed">
                Mas antes de tudo, sou uma{" "}
                <strong className="text-murasaki300">
                  mulher brasileira vivendo no Japão
                </strong>{" "}
                — que já sentiu o peso da rotina, o cansaço e o medo de nunca
                mais se reconhecer.
              </p>
              <p className="leading-relaxed">
                Hoje, ensino mulheres a emagrecerem de forma{" "}
                <strong className="text-murasaki300">
                  leve, inteligente e sustentável
                </strong>
                , com um método que respeita corpo, mente e cultura.
              </p>
            </div>

            {/* Quote */}
            <div className="mb-8 rounded-xl border-l-4 border-murasaki200 bg-murasaki100/10 p-4">
              <p className="italic text-gray700">
                "Nunca é sobre dieta. É sobre recomeçar com leveza e
                consciência."
              </p>
            </div>

            {/* Credentials Grid */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {CREDENTIALS.map((credential, index) => {
                const Icon = credential.icon;
                return (
                  <div
                    key={index}
                    className="group flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm transition-all hover:shadow-lg"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-murasaki100/20 to-midori100/20">
                      <Icon
                        size={20}
                        className="text-murasaki200"
                        weight="fill"
                      />
                    </div>
                    <span className="text-sm font-medium text-gray700">
                      {credential.text}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
