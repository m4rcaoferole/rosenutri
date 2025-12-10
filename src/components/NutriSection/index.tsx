"use client";

import { WhatsappLogo } from "@phosphor-icons/react";
import Image from "next/image";

import logoCircleRose from "../../assets/logo-rose-circular-original.png";
import nutriPhoto from "../../assets/nutriPhoto.png";

export default function NutriSection() {
  return (
    <section className="border-t-4 border-t-purple700 bg-gradient-to-tr from-purple700/30 via-white/80 to-purple700/90 px-6 pt-8 sm:pt-12 md:pt-10">
      <div className="mx-auto flex max-w-4xl">
        {/* Texto e Botão */}
        <div className="flex flex-col gap-2 space-x-4 text-ellipsis md:pr-10 md:text-left">
          <div className="flex items-center gap-4 md:justify-evenly">
            <Image
              src={logoCircleRose}
              alt="Logo da Nutri"
              width={100}
              height={100}
            />
            <h1 className="text-gray-900 text-center text-2xl font-bold sm:text-3xl">
              Acompanhamento{" "}
              <span className="text-purple900">Nutricional</span>
              <br /> 100% Online e
              <span className="text-purple900"> Personalizado</span>
            </h1>
          </div>

          <h2 className="text-[10px] font-bold text-green900 sm:text-sm md:text-center">
            Cada mulher é única ー e sua alimentação também precisa ser.
          </h2>
          <p className="text-gray-700 text-sm sm:text-lg">
            No meu atendimento online, você recebe um plano alimentar adaptado à
            sua rotina, objetivos e gostos, sem restrições desnecessárias e com
            foco em resultados reais e duradouros.
          </p>
          <p className="text-gray-700 text-sm sm:text-lg">
            Seja no Japão, no Brasil ou onde você estiver, o meu acompanhamento
            vai além da dieta:
          </p>
          <p className="text-gray-700 text-sm sm:text-lg">
            É uma parceria com foco em leveza, estratégia e mudança de verdade.
          </p>
          <div className="flex flex-1 items-center justify-center">
            <a
              href="https://wa.me/819038354891"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center rounded bg-gradient-to-r from-purple900 to-purple700 px-8 py-4 font-bold text-white shadow-lg transition hover:opacity-90"
            >
              <WhatsappLogo size={28} className="mr-2 inline" />
              Agendar pelo WhatsApp
            </a>
          </div>
        </div>

        {/* Foto da Nutricionista */}
        <div className="animate-fadeIn hidden md:block">
          <Image
            src={nutriPhoto}
            alt="Foto da Nutricionista Rosemary Azuma"
            width={500}
            height={500}
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
