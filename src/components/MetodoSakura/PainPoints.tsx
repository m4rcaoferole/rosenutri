import {
  BatteryWarning,
  Clock,
  FirstAidKit,
  Globe,
  Heart,
  Lightning,
  Pill,
  Prohibit,
  SmileySad,
  TrendDown,
} from "@phosphor-icons/react/dist/ssr";

const PAIN_POINTS = [
  {
    icon: BatteryWarning,
    text: 'Você vive cansada, inchada e sem energia, mesmo comendo "certinho"',
  },
  {
    icon: Clock,
    text: "Você sente que o metabolismo desacelerou depois dos 40",
  },
  {
    icon: FirstAidKit,
    text: "Você sofre com TPM, intestino preso, sono ruim e variações de humor",
  },
  {
    icon: SmileySad,
    text: "Você sente culpa ao comer, mesmo quando faz tudo certo",
  },
];

const FAILED_ATTEMPTS = [
  {
    icon: Prohibit,
    text: "Dietas restritivas",
    reason: "tiram sua energia, te deixam irritada e acabam em compulsão",
  },
  {
    icon: Pill,
    text: "Suplementos e chás milagrosos",
    reason: "custam caro e te deixam frustrada",
  },
  {
    icon: Clock,
    text: "Treinos aleatórios",
    reason: "não respeitam sua rotina de turnos",
  },
  {
    icon: Globe,
    text: "Dietas da internet",
    reason: "planos genéricos, muita informação solta, zero resultado",
  },
  {
    icon: TrendDown,
    text: "Medicação sem mudança de hábito",
    reason: "até funciona, mas sem bons hábitos o peso volta em dobro",
  },
];

export default function MetodoSakuraPainPoints() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray50 via-white to-shiro100 py-16 lg:py-20">
      <div className="container relative z-10 mx-auto max-w-5xl px-6">
        {/* ========== SECTION 1: VOCÊ SE IDENTIFICA? ========== */}
        <div className="mb-20">
          <div className="mb-10 text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-murasaki200">
              VOCÊ SE IDENTIFICA?
            </p>
            <h2 className="mb-4 font-serif text-3xl font-bold text-gray700 sm:text-4xl">
              Depois dos 40, o corpo mudou. A rotina no Japão, não.
            </h2>
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-gray500 sm:text-lg">
              Talvez você trabalhe em turnos trocados e sinta que o seu corpo já
              não responde como antes. Talvez já tenha tentado de tudo e o
              ponteiro da balança não sai do lugar.
            </p>
          </div>

          {/* 4 Identification Items */}
          <div className="mb-10 grid gap-6 sm:grid-cols-2">
            {PAIN_POINTS.map((point, index) => {
              const Icon = point.icon;
              return (
                <div
                  key={index}
                  className="flex items-start gap-4 rounded-2xl border border-gray300 bg-white p-6 shadow-sm transition-colors duration-200 hover:border-murasaki100"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-murasaki100/10">
                    <Icon
                      size={24}
                      className="text-murasaki200"
                      weight="fill"
                      aria-hidden="true"
                    />
                  </div>
                  <p className="text-base font-medium leading-relaxed text-gray700 sm:text-lg">
                    {point.text}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Closing Card */}
          <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl bg-white shadow-lg">
            <div className="bg-gradient-to-r from-murasaki200 to-murasaki300 px-6 py-4">
              <p className="text-center text-base font-medium text-white sm:text-lg">
                E, no fundo, você começa a acreditar que o problema é você.
              </p>
            </div>
            <div className="p-8 text-center">
              <p className="mb-4 font-serif text-2xl font-bold text-murasaki300">
                Mas não é.
              </p>
              <p className="mb-6 text-base leading-relaxed text-gray700 sm:text-lg">
                O problema é que{" "}
                <strong className="text-murasaki300">
                  ninguém te ensinou a cuidar do corpo depois dos 40
                </strong>{" "}
                respeitando a rotina e a vida que você tem aqui no Japão.
              </p>
              <div className="inline-flex items-center gap-2.5 rounded-full bg-murasaki100/10 px-6 py-3">
                <Heart
                  size={24}
                  className="shrink-0 text-murasaki200"
                  weight="fill"
                  aria-hidden="true"
                />
                <span className="text-base font-semibold italic text-murasaki300">
                  Eu te entendo, e foi exatamente por isso que criei o Método
                  Sakura.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ========== SECTION 2: POR QUE NADA FUNCIONOU ATÉ AGORA? ========== */}
        <div className="rounded-3xl bg-shiro100/70 px-6 py-12 sm:px-10">
          <div className="mb-8 text-center">
            <h3 className="mb-6 font-serif text-3xl font-bold text-murasaki300 sm:text-4xl">
              Por que nada funcionou até agora?
            </h3>

            {/* Moved to the start of the subsection to reduce guilt earlier */}
            <div className="mx-auto max-w-2xl rounded-2xl border border-murasaki100/40 bg-white p-6 shadow-sm">
              <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-full bg-murasaki200 text-white">
                <Lightning size={24} weight="fill" aria-hidden="true" />
              </div>
              <p className="mb-2 text-xl font-bold text-murasaki300">
                O que faltava não era força de vontade.
              </p>
              <p className="text-base leading-relaxed text-gray700">
                Faltava um método que entendesse a{" "}
                <strong className="text-murasaki300">mulher real</strong> que
                você é — com trabalho, rotina puxada e sonhos que continuam
                vivos.
              </p>
            </div>
          </div>

          <div className="mx-auto max-w-2xl space-y-4">
            {FAILED_ATTEMPTS.map((attempt, index) => {
              const Icon = attempt.icon;
              return (
                <div
                  key={index}
                  className="flex items-start gap-4 rounded-xl border border-gray300/60 bg-white p-5 shadow-sm"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-murasaki100/10 text-murasaki200">
                    <Icon size={20} weight="bold" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-base font-bold text-gray700 sm:text-lg">
                      {attempt.text}
                    </p>
                    <p className="text-base leading-relaxed text-gray500">
                      {attempt.reason}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
