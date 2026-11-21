import { Brain, Calendar, Handshake, Users } from "@phosphor-icons/react/dist/ssr";

import SakuraIcon from "@/components/ui/SakuraIcon";

const METHOD_UNITES = [
  {
    icon: Calendar,
    text: "Nutrição adaptada à sua rotina e aos seus turnos",
  },
  {
    icon: Brain,
    text: "Estratégias comportamentais para equilibrar emoções e não descontar na comida",
  },
  {
    icon: Handshake,
    text: "Acolhimento humano e estratégico — porque aqui você não caminha sozinha",
  },
  {
    icon: Users,
    text: "Resultados reais de mulheres que vivem a mesma jornada que você",
  },
];

export default function MetodoSakuraIntro() {
  return (
    <section
      id="metodo"
      className="relative overflow-hidden bg-gradient-to-br from-murasaki100/20 via-shiro100 to-murasaki100/10 py-16 lg:py-20"
    >
      {/* Decorative botanical sakura SVGs */}
      <SakuraIcon className="pointer-events-none absolute left-8 top-12 h-16 w-16 text-murasaki100/15" />
      <SakuraIcon className="pointer-events-none absolute right-10 bottom-12 h-14 w-14 text-murasaki100/15" />

      <div className="container relative z-10 mx-auto max-w-5xl px-6">
        <div className="text-center">
          <h2 className="mb-6 font-serif text-3xl font-bold text-murasaki200 sm:text-5xl">
            Método Sakura
          </h2>

          <p className="mx-auto mb-8 max-w-3xl text-base leading-relaxed text-gray700 sm:text-lg">
            O <strong className="text-murasaki300">Método Sakura</strong> é um
            Programa Nutricional de{" "}
            <strong className="text-murasaki300">90 dias</strong> criado para
            mulheres brasileiras e latinas{" "}
            <strong className="text-murasaki300">40+</strong> que vivem no Japão
            e desejam emagrecer com leveza, consciência e constância —{" "}
            <em>sem dietas impossíveis e sem culpa.</em>
          </p>

          {/* Inspiration Card */}
          <div className="mx-auto max-w-3xl rounded-2xl border border-murasaki100/30 bg-white/90 p-6 shadow-lg sm:p-8">
            <div className="mb-6 flex flex-wrap items-center justify-center gap-2 text-base text-gray700 sm:text-lg">
              <span>Inspirado no ciclo da flor de cerejeira</span>
              <SakuraIcon className="inline h-5 w-5 text-murasaki200" />
              <strong className="text-murasaki200">(Sakura)</strong>
              <span>
                — símbolo japonês de renovação e recomeço — o método une:
              </span>
            </div>

            {/* Method Unites Items */}
            <div className="mb-8 grid gap-4 text-left sm:grid-cols-2">
              {METHOD_UNITES.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="flex items-start gap-3 rounded-xl bg-shiro100/60 p-4"
                  >
                    <Icon
                      size={24}
                      className="mt-0.5 shrink-0 text-murasaki200"
                      aria-hidden="true"
                    />
                    <span className="text-base leading-relaxed text-gray700">
                      {item.text}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Promise */}
            <div className="rounded-xl bg-midori100/10 p-6">
              <p className="mb-4 text-base leading-relaxed text-gray700 sm:text-lg">
                Aqui, você não recebe apenas um plano alimentar.
                <br />
                <strong className="text-murasaki300">
                  Você recebe um processo que cabe na sua rotina e muda a sua
                  relação com a comida.
                </strong>
              </p>
              <p className="font-serif text-lg font-semibold italic text-murasaki200">
                &ldquo;O florescer da mulher começa quando ela decide cuidar de
                si com leveza.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
