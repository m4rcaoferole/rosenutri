import { WhatsappLogo } from '@phosphor-icons/react';
import Image from 'next/image';

import logoCircleRose from '../../assets/logo-rose-circular-original.png';
import nutriPhoto from '../../assets/nutriPhoto.png';

export default function NutriSection() {
  return (
    <section className="bg-gradient-to-tr from-murasaki100/30 border-t-4 border-t-murasaki100 via-white/80 to-murasaki100/90 px-6 pt-8 md:pt-10 sm:pt-12">
      <div className="max-w-4xl mx-auto flex">
        {/* Texto e Botão */}
        <div className="flex flex-col gap-2 text-ellipsis md:pr-10 md:text-left space-x-4">
          <div className="flex md:justify-evenly  items-center gap-4">
            <Image src={logoCircleRose} alt="Logo da Nutri" width={100} height={100} />
            <h1 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 ">
              Acompanhamento <span className="text-murasaki300">Nutricional</span>
              <br /> 100% Online e<span className="text-murasaki300"> Personalizado</span>
            </h1>
          </div>

          <h2 className="text-[10px] md:text-center font-bold text-midori300 sm:text-sm">
            Cada mulher é única ー e sua alimentação também precisa ser.
          </h2>
          <p className="text-gray-700 text-sm sm:text-lg">
            No meu atendimento online, você recebe um plano alimentar adaptado à sua rotina,
            objetivos e gostos, sem restrições desnecessárias e com foco em resultados reais e
            duradouros.
          </p>
          <p className="text-gray-700 text-sm sm:text-lg">
            Seja no Japão, no Brasil ou onde você estiver, o meu acompanhamento vai além da dieta:
          </p>
          <p className="text-gray-700 text-sm sm:text-lg">
            É uma parceria com foco em leveza, estratégia e mudança de verdade.
          </p>
          <div className="flex flex-1 justify-center items-center">
            <a
              href="https://wa.me/819038354891"
              target="_blank"
<<<<<<< HEAD
              rel="noopener noreferrer"
              // className="bg-murasaki300 text-white font-bold px-8 py-4 rounded shadow-lg hover:bg-murasaki100 transition"
              className="bg-gradient-to-r from-murasaki300 to-murasaki100 text-white font-bold px-8 py-4 rounded shadow-lg hover:opacity-90 transition"
=======
              className="flex items-center mt-4 bg-gradient-to-r from-murasaki300 to-murasaki100 text-white font-bold px-8 py-4 rounded shadow-lg hover:opacity-90 transition"
>>>>>>> c17fdf5 (fix: correct style `NutriSection`)
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
