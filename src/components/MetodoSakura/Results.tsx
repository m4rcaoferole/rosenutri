import { Brain, Heart, Sparkle } from "@phosphor-icons/react/dist/ssr";

const RESULTS = [
  {
    title: "No corpo",
    icon: Heart,
    headerClass: "bg-murasaki200 text-white",
    items: [
      "Emagrecimento real e consistente",
      "Melhor funcionamento do intestino e menos inchaço",
      "Melhor qualidade do sono e energia renovada",
      "Alívio de sintomas hormonais e da TPM",
    ],
  },
  {
    title: "Na mente",
    icon: Brain,
    headerClass: "bg-midori100 text-white",
    items: [
      "Fim da culpa ao comer",
      "Paz e consciência alimentar",
      "Autoestima fortalecida",
      "Clareza e leveza emocional",
    ],
  },
  {
    title: "Na vida",
    icon: Sparkle,
    headerClass: "bg-shiro300 text-murasaki300",
    items: [
      "Equilíbrio entre rotina e autocuidado",
      "Pertencimento e motivação",
      "Orgulho da própria jornada",
    ],
  },
];

export default function MetodoSakuraResults() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-shiro100 to-white py-16">
      <div className="container relative z-10 mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-3 font-serif text-3xl font-bold text-murasaki300 sm:text-4xl">
            Transformação em cada área da sua vida
          </h2>
          <p className="mx-auto max-w-xl text-base text-gray700 sm:text-lg">
            O que você constrói ao longo do acompanhamento
          </p>
        </div>

        {/* Results Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {RESULTS.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="rounded-2xl border border-gray300/60 bg-white p-6 shadow-md"
              >
                <div
                  className={`mb-6 inline-flex items-center gap-3 rounded-xl px-4 py-2.5 ${category.headerClass}`}
                >
                  <Icon size={22} weight="fill" aria-hidden="true" />
                  <h3 className="text-base font-bold">{category.title}</h3>
                </div>

                <ul className="space-y-3">
                  {category.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-base leading-relaxed text-gray700"
                    >
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-murasaki200"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
