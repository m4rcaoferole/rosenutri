import {
  CalendarCheck,
  GlobeHemisphereWest,
  Heart,
  Sparkle,
  Star,
} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";

import nutriPhoto from "@/assets/nutri_2.png";

const CREDENTIALS = [
  {
    icon: Star,
    text: "Nutricionista há mais de 17 anos",
  },
  {
    icon: CalendarCheck,
    text: "3 anos de atendimento a mulheres 40+ no Japão",
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
    <section
      id="about"
      className="relative overflow-hidden bg-gradient-to-br from-murasaki100/10 via-white to-shiro100 py-16 lg:py-20"
    >
      <div className="container relative z-10 mx-auto max-w-5xl px-6">
        <div className="mb-12 text-center">
          <h2 className="font-serif text-3xl font-bold text-murasaki300 sm:text-4xl">
            Conheça a Rose Azuma
          </h2>
        </div>

        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-start">
          {/* Photo */}
          <div className="shrink-0">
            <div className="relative">
              <Image
                src={nutriPhoto}
                alt="Nutricionista Rosemary Azuma"
                width={380}
                height={450}
                sizes="(max-width: 1024px) 288px, 320px"
                className="relative h-auto w-72 rounded-2xl border-4 border-white object-cover shadow-2xl lg:w-80"
              />
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-xl bg-gradient-to-r from-murasaki200 to-murasaki300 px-6 py-3 text-center shadow-lg">
                <span className="whitespace-nowrap text-base font-semibold text-white">
                  Rose Azuma
                </span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="mb-8 space-y-4 text-base leading-relaxed text-gray700 sm:text-lg">
              <p>
                Eu sou <strong className="text-murasaki300">Rose Azuma</strong>,
                nutricionista há mais de{" "}
                <strong className="text-murasaki300">17 anos</strong>. Há{" "}
                <strong className="text-murasaki300">3 anos</strong>, atendo
                mulheres 40+ aqui no Japão, em acompanhamento 100% online. Mas
                antes de tudo, sou uma{" "}
                <strong className="text-murasaki300">
                  mulher brasileira vivendo no Japão
                </strong>
                , que já sentiu o peso da rotina, o cansaço e o medo de nunca
                mais se reconhecer.
              </p>
              <p>
                Hoje, ensino mulheres a emagrecerem de forma{" "}
                <strong className="text-murasaki300">
                  leve, inteligente e sustentável
                </strong>
                , com um método que respeita corpo, mente e cultura.
              </p>
            </div>

            {/* Quote */}
            <div className="mb-8 rounded-xl border-l-4 border-murasaki200 bg-murasaki100/10 p-5 text-left">
              <p className="font-serif text-lg italic text-gray700">
                &ldquo;Nunca é sobre dieta. É sobre recomeçar com leveza e
                consciência.&rdquo;
              </p>
            </div>

            {/* Credentials Grid */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {CREDENTIALS.map((credential) => {
                const Icon = credential.icon;
                return (
                  <div
                    key={credential.text}
                    className="flex items-center gap-4 rounded-xl border border-gray300/60 bg-white p-4 text-left shadow-sm"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-murasaki100/15">
                      <Icon
                        size={20}
                        className="text-murasaki200"
                        weight="fill"
                        aria-hidden="true"
                      />
                    </div>
                    <span className="text-base font-medium leading-snug text-gray700">
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
