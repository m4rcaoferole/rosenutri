import Image from "next/image";

import logoCircular from '../../assets/logo-rose-circular-original.png';

export default function NutriSection() {
  return (
    <section className="flex h-30 mt-[150px]">
      <div className="flex-1 pt-14 space-y-16 text-center bg-midori200">
        <div className="leading-10 space-y-12">
          <h1 className="text-4xl text-shiro100 font-medium font-serif px-30">Rosemary Azuma</h1>
          <p className="text-shiro100 text-2xl">Conquistando a sua melhor saúde!</p>
          <p className="text-shiro100 text-2xl">
            Nutricionista especialista em emagrecimento e saúde da mulher.
            <br /> Atendimento online personalizado.
          </p>
        </div>
        <button className="px-4 py-2 text-sm text-shiro100 rounded font-medium bg-murasaki300 hover:bg-murasaki200">
          Agende sua consulta
        </button>
      </div>
      <div className="flex-1">
        <Image src={logoCircular} height={400} alt="" />
      </div>
    </section>
  );
}
