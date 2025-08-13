import { WhatsappLogo } from '@phosphor-icons/react';
import Image from 'next/image';

import logoCircleRose from '../../assets/logo-rose-circular-original.png';
import nutriPhoto from '../../assets/nutriPhoto.png';

export default function NutriSection() {
  return (
    <section className="bg-gradient-to-tr from-murasaki100/30 border-t-4 border-t-murasaki100 via-white/80 to-murasaki100/90 px-6 pt-8 md:pt-6 sm:pt-12">
      <div className="max-w-4xl mx-auto flex items-center">
        {/* Texto e Botão */}
        <div className="text-center flex flex-col gap-3 md:pr-10 md:text-left space-x-6">
          <div className="flex justify-evenly items-center gap-6">
            <Image src={logoCircleRose} alt="Logo da Nutri" width={100} height={100} />
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              Acompanhamento{' '}
              <span className="text-murasaki300">
                Nutricional <br />
              </span>{' '}
              100% Online e<span className="text-murasaki300"> Personalizado</span>
            </h1>
          </div>

          <h2 className="text-xs md:text-right font-semibold text-midori300 sm:text-sm">
            Cada mulher é única e sua alimentação também precisa ser.
          </h2>

          <p className="text-gray-700 text-lg sm:text-base">
            No meu atendimento online, você recebe um plano alimentar adaptado à sua rotina,
            objetivos e gostos, sem restrições desnecessárias e com foco em resultados reais.
          </p>

          <div className="flex justify-center item-center w-30 mb-10">
            <a
              href="https://wa.me/819038354891"
              target="_blank"
              // className="bg-murasaki300 text-white font-bold px-8 py-4 rounded shadow-lg hover:bg-murasaki100 transition"
              className="bg-gradient-to-r from-murasaki300 to-murasaki100 text-white font-bold px-8 py-4 rounded shadow-lg hover:opacity-90 transition"
            >
              <WhatsappLogo size={28} className="inline mr-2" />
              Agendar pelo WhatsApp
            </a>
          </div>
        </div>

        {/* Foto da Nutricionista */}
        <div className="hidden md:block animate-fadeIn">
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
