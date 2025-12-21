"use client";

import { WhatsappLogo } from "@phosphor-icons/react";
import Image from "next/image";

import logoCircleRose from "../../assets/logo-rose-circular-original.png";
import nutriPhoto from "../../assets/nutri_1.png";

export default function NutriSection() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={nutriPhoto}
          alt="Nutricionista Rosemary Azuma"
          fill
          className="object-cover object-[center_30%] lg:object-[65%_30%]"
          priority
          sizes="100vw"
        />
        {/* Gradient Overlay - mais claro */}
        <div className="absolute inset-0 bg-gradient-to-r from-murasaki100/65 via-murasaki100/35 to-transparent" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex min-h-[75vh] items-center pt-20">
        <div className="mx-auto max-w-6xl px-6 py-12 lg:py-16">
          <div className="max-w-2xl">
            {/* Logo + Badge side by side */}
            <div className="mb-8 flex flex-wrap items-center gap-4">
              <Image
                src={logoCircleRose}
                alt="Logo Rose Nutri"
                width={80}
                height={80}
                className="brightness-0 invert"
              />
              <div className="inline-flex items-center gap-2 rounded-full bg-white/25 px-4 py-2 backdrop-blur-sm">
                <span className="h-2 w-2 animate-pulse rounded-full bg-shiro200" />
                <span className="text-sm font-medium text-white">
                  17 anos de experiência • 100% Online
                </span>
              </div>
            </div>

            {/* Title */}
            <h1 className="mb-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Acompanhamento
              <br />
              <span className="text-shiro200">Nutricional</span>
              <br />
              <span className="text-white/90">Personalizado</span>
            </h1>

            {/* Subtitle */}
            <p className="mb-4 text-xl font-semibold text-shiro200">
              Cada mulher é única ー e sua alimentação também precisa ser.
            </p>

            {/* Description */}
            <p className="mb-8 max-w-lg text-lg leading-relaxed text-white/90">
              Receba um plano alimentar adaptado à sua rotina, objetivos e
              gostos. Seja no Japão, no Brasil ou onde você estiver — uma
              parceria com foco em leveza, estratégia e mudança de verdade.
            </p>

            {/* CTA */}
            <a
              href="https://wa.me/819038354891?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20acompanhamento%20nutricional."
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-lg font-bold text-murasaki300 shadow-xl transition-all hover:scale-105 hover:bg-shiro200"
            >
              <WhatsappLogo size={28} weight="fill" className="text-midori100" />
              Agendar Consulta
            </a>
          </div>
        </div>
      </div>

      {/* Quote Section - integrada no mesmo background */}
      <div className="relative z-10 pb-16">
        <div className="mx-auto max-w-4xl px-6">
          <div className="rounded-2xl border-l-4 border-shiro200 bg-white/15 py-6 pl-6 pr-8 backdrop-blur-sm">
            <p className="text-lg font-medium text-white italic sm:text-xl">
              "Você não precisa sofrer para emagrecer. Só precisa de um plano
              que funcione na sua vida real — e alguém do seu lado pra te guiar
              com acolhimento e estratégia."
            </p>
            <p className="mt-4 font-semibold text-shiro200">— Rosemary Azuma</p>
          </div>
        </div>
      </div>
    </section>
  );
}
