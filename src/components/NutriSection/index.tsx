import Image from "next/image";

import nutriPhoto from "@/assets/nutri_1.png";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { CTA_TEXT, WHATSAPP_MESSAGES } from "@/config/site";

export default function NutriSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-murasaki300 via-murasaki200 to-murasaki100 pt-24 pb-16 lg:pt-28 lg:pb-20">
      {/* Subtle decorative glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-shiro200/10 blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Editorial Copy Column */}
          <div className="text-left lg:col-span-7">
            <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-white/25 bg-white/15 px-4 py-2 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-shiro200" aria-hidden="true" />
              <span className="text-sm font-medium text-white sm:text-base">
                Há 3 anos atendendo mulheres 40+ no Japão
              </span>
            </div>

            <h1 className="mb-6 font-serif text-3xl font-bold leading-tight text-white sm:text-5xl lg:text-[3.25rem]">
              Use sua rotina como aliada no seu emagrecimento.
            </h1>

            <p className="mb-8 max-w-xl text-base leading-relaxed text-white/95 sm:text-xl">
              Plano alimentar feito para o seu turno, com os alimentos do
              mercado japonês e acompanhamento de perto por 90 dias. Sem dieta
              impossível e sem culpa.
            </p>

            <div className="mb-10">
              <WhatsAppButton
                label={CTA_TEXT}
                message={WHATSAPP_MESSAGES.general}
              />
            </div>

            {/* Reinforcement Quote */}
            <div className="rounded-2xl border-l-4 border-shiro200 bg-white/15 py-5 pl-6 pr-6 backdrop-blur-sm">
              <p className="text-base font-medium italic leading-relaxed text-white sm:text-lg">
                &ldquo;Você não precisa sofrer para emagrecer. Só precisa de um
                plano que funcione na sua vida real e alguém do seu lado pra te
                guiar com acolhimento e estratégia.&rdquo;
              </p>
              <p className="mt-3 text-sm font-semibold text-shiro200 sm:text-base">
                — Rosemary Azuma
              </p>
            </div>
          </div>

          {/* Portrait Column - visible and unobstructed on mobile and desktop */}
          <div className="lg:col-span-5">
            <div className="mx-auto max-w-sm lg:max-w-none">
              <div className="relative overflow-hidden rounded-3xl border-2 border-shiro200/30 shadow-2xl">
                <Image
                  src={nutriPhoto}
                  alt="Nutricionista Rosemary Azuma sorrindo"
                  priority
                  sizes="(max-width: 1024px) 90vw, 42vw"
                  className="h-auto w-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
