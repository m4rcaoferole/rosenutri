import {
  Flower,
  Heart,
  Lightning,
  Moon,
  Scales,
  Sparkle,
} from "@phosphor-icons/react/dist/ssr";

const BENEFITS = [
  {
    icon: Scales,
    text: "Emagrecer de forma consciente e sustentável",
  },
  {
    icon: Heart,
    text: "Melhorar o funcionamento do intestino, a qualidade do sono e os sintomas ligados ao ciclo hormonal",
  },
  {
    icon: Lightning,
    text: "Acabar com o efeito sanfona e as dietas restritivas",
  },
  {
    icon: Sparkle,
    text: "Ter mais energia, disposição e leveza",
  },
  {
    icon: Moon,
    text: "Voltar a se olhar no espelho com orgulho e tranquilidade",
  },
];

export default function MetodoSakuraSolution() {
  return (
    <section className="relative overflow-hidden bg-white py-16">
      <div className="container relative z-10 mx-auto max-w-4xl px-6">
        <div className="mb-10 text-center">
          <h2 className="mb-3 font-serif text-3xl font-bold text-murasaki300 sm:text-4xl">
            O que muda com o Método Sakura
          </h2>
          <p className="mx-auto max-w-2xl text-base text-gray500 sm:text-lg">
            Um acompanhamento pensado para reconectar você ao seu corpo, ao seu
            ritmo e ao seu equilíbrio natural.
          </p>
        </div>

        {/* Benefits List */}
        <div className="mb-12">
          <p className="mb-6 text-center text-lg font-semibold text-murasaki200">
            Você vai:
          </p>

          <div className="mx-auto max-w-3xl space-y-4">
            {BENEFITS.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="flex items-center gap-4 rounded-xl border border-gray300/60 bg-gray50 p-4 shadow-sm"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-murasaki100/15">
                    <Icon
                      size={24}
                      className="text-murasaki200"
                      weight="duotone"
                      aria-hidden="true"
                    />
                  </div>
                  <p className="text-base font-medium leading-relaxed text-gray700 sm:text-lg">
                    {benefit.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Quote Card */}
        <div className="mx-auto max-w-3xl rounded-2xl border border-murasaki100/30 bg-shiro100/60 p-8 text-center">
          <Flower
            size={36}
            className="mx-auto mb-4 text-murasaki200"
            weight="fill"
            aria-hidden="true"
          />
          <p className="font-serif text-xl font-medium italic leading-relaxed text-gray700 sm:text-2xl">
            &ldquo;Recupere energia, leveza e autoconfiança — com um método que
            respeita o seu ritmo, o seu corpo e a sua vida.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
