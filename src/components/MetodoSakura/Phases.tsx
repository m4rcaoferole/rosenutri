import { FlowerLotus, Leaf, Plant, Tree } from "@phosphor-icons/react/dist/ssr";

const PHASES = [
  {
    phase: "Fase 1: Solo",
    subtitle: "Preparação do terreno",
    description:
      "Aqui você aprende os fundamentos da alimentação saudável adaptada ao Japão e prepara seu corpo para a transformação.",
    icon: Plant,
    badgeClass: "bg-murasaki200 text-white",
    cardClass: "border-murasaki100/30 bg-murasaki100/5",
    subtitleClass: "text-murasaki200",
    lineClass: "bg-murasaki100/30",
  },
  {
    phase: "Fase 2: Brotar",
    subtitle: "Os primeiros resultados aparecem",
    description:
      "Seu corpo começa a responder, o inchaço diminui e você sente mais energia no dia a dia.",
    icon: Leaf,
    badgeClass: "bg-midori100 text-white",
    cardClass: "border-midori100/30 bg-midori100/5",
    subtitleClass: "text-midori100",
    lineClass: "bg-midori100/30",
  },
  {
    phase: "Fase 3: Florescer",
    subtitle: "A transformação se torna visível",
    description:
      "Você emagrece de forma saudável, recupera sua autoestima e se sente bem no próprio corpo novamente.",
    icon: FlowerLotus,
    badgeClass: "bg-shiro300 text-murasaki300",
    cardClass: "border-shiro300 bg-shiro200/40",
    subtitleClass: "text-murasaki200",
    lineClass: "bg-shiro300",
  },
  {
    phase: "Fase 4: Enraizar",
    subtitle: "Manutenção e consolidação",
    description:
      "Você aprende a manter os resultados para sempre, criando hábitos sustentáveis que se encaixam na sua vida.",
    icon: Tree,
    badgeClass: "bg-murasaki300 text-white",
    cardClass: "border-murasaki200/30 bg-murasaki100/10",
    subtitleClass: "text-murasaki200",
    lineClass: "",
  },
];

export default function MetodoSakuraPhases() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="container mx-auto max-w-4xl px-6">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h3 className="mb-4 font-serif text-3xl font-bold text-murasaki200 sm:text-4xl">
            As 4 Fases do Método Sakura
          </h3>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-gray500 sm:text-lg">
            Como a flor de cerejeira que floresce em etapas, sua transformação
            também acontece gradualmente — do broto até a árvore enraizada.
          </p>
        </div>

        {/* Single Connected Timeline (Sprout -> Tree) */}
        <div className="space-y-6">
          {PHASES.map((item, index) => {
            const Icon = item.icon;
            const isLast = index === PHASES.length - 1;

            return (
              <div key={item.phase} className="flex gap-4 sm:gap-6">
                <div className="flex flex-col items-center">
                  <div
                    className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full shadow-md ${item.badgeClass}`}
                  >
                    <Icon size={28} weight="fill" aria-hidden="true" />
                  </div>
                  {!isLast && (
                    <div className={`mt-2 w-0.5 flex-1 ${item.lineClass}`} />
                  )}
                </div>

                <div
                  className={`flex-1 rounded-2xl border p-6 ${item.cardClass}`}
                >
                  <h4 className="mb-1 font-serif text-xl font-bold text-murasaki300">
                    {item.phase}
                  </h4>
                  <p className={`text-sm font-semibold sm:text-base ${item.subtitleClass}`}>
                    {item.subtitle}
                  </p>
                  <p className="mt-2 text-base leading-relaxed text-gray700">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
