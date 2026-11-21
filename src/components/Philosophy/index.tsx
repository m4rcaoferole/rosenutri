import { CheckCircle, Flower, Heart, Sparkle } from "@phosphor-icons/react/dist/ssr";

import SakuraIcon from "@/components/ui/SakuraIcon";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { CTA_TEXT, WHATSAPP_MESSAGES } from "@/config/site";

const PHILOSOPHY_POINTS = [
  {
    icon: Heart,
    text: "Nada de dietas restritivas ou promessas milagrosas",
  },
  {
    icon: Sparkle,
    text: "Respeito aos seus gostos e à sua cultura alimentar",
  },
  {
    icon: CheckCircle,
    text: "Foco em resultados sustentáveis e duradouros",
  },
  {
    icon: Flower,
    text: "Alimentação flexível, adaptada à sua rotina real",
  },
  {
    icon: Heart,
    text: "Acolhimento e suporte contínuo durante todo o processo",
  },
  {
    icon: Sparkle,
    text: "Leveza, consciência e constância como pilares do cuidado",
  },
];

export default function Philosophy() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-murasaki100/15 via-shiro100 to-midori100/10 py-16 lg:py-20">
      <SakuraIcon className="pointer-events-none absolute left-10 top-10 h-14 w-14 text-murasaki100/15" />
      <SakuraIcon className="pointer-events-none absolute bottom-10 right-16 h-12 w-12 text-murasaki100/15" />

      <div className="container relative z-10 mx-auto max-w-5xl px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-serif text-3xl font-bold text-murasaki200 sm:text-4xl">
            Minha Filosofia de Cuidado
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-gray700 sm:text-lg">
            Acredito em uma nutrição que transforma vidas sem sofrimento.
            Inspirada no ciclo da Sakura, onde cada fase tem seu tempo e sua
            beleza.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Quote Card */}
          <div className="flex flex-col justify-between rounded-2xl border border-gray300/60 bg-white p-8 shadow-lg">
            <div>
              <h3 className="mb-6 font-serif text-xl font-semibold text-murasaki200">
                Palavras que guiam meu trabalho
              </h3>
              <blockquote className="rounded-xl bg-shiro100/70 p-6">
                <p className="font-serif text-lg italic leading-relaxed text-gray700 sm:text-xl">
                  &ldquo;Uma alimentação saudável precisa ser possível, prazerosa
                  e sustentável.&rdquo;
                </p>
              </blockquote>
            </div>

            <p className="mt-6 text-right text-base font-medium text-gray500">
              — Rosemary Azuma
            </p>
          </div>

          {/* Philosophy Points */}
          <div className="rounded-2xl border border-gray300/60 bg-white p-8 shadow-lg">
            <h3 className="mb-6 font-serif text-xl font-semibold text-murasaki200">
              O que você encontra no meu cuidado
            </h3>

            <div className="space-y-4">
              {PHILOSOPHY_POINTS.map((point) => {
                const Icon = point.icon;
                return (
                  <div
                    key={point.text}
                    className="flex items-center gap-4 rounded-xl bg-gray50 p-4"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-murasaki100/15">
                      <Icon
                        size={20}
                        weight="fill"
                        className="text-murasaki200"
                        aria-hidden="true"
                      />
                    </div>
                    <span className="text-base font-medium text-gray700">
                      {point.text}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="mb-6 text-base text-gray700 sm:text-lg">
            Pronta para começar sua transformação com leveza e propósito?
          </p>
          <WhatsAppButton
            label={CTA_TEXT}
            message={WHATSAPP_MESSAGES.metodoSakura}
          />
        </div>
      </div>
    </section>
  );
}
