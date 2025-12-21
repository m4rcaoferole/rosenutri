"use client";

import {
  Brain,
  Calendar,
  DeviceMobile,
  Fire,
  Flower,
  Gift,
  Handshake,
  Heart,
  ListChecks,
  Notebook,
  Target,
  Users,
  VideoCamera,
} from "@phosphor-icons/react";

const PILLARS = [
  {
    title: "Acompanhamento Próximo",
    subtitle: "e Humanizado",
    icon: Heart,
    color: "from-murasaki200 to-murasaki300",
    items: [
      { icon: Calendar, text: "90 dias de suporte" },
      { icon: VideoCamera, text: "5 encontros online" },
      { icon: Target, text: "Plano alimentar adaptativo Sakura" },
      { icon: DeviceMobile, text: "Acesso completo ao App da Nutri" },
    ],
  },
  {
    title: "Sistema Antidesistência",
    subtitle: "Sakura",
    icon: Fire,
    color: "from-midori100 to-midori200",
    items: [
      { icon: Notebook, text: "Diário alimentar e reflexivo" },
      { icon: Users, text: "Avaliações corporais" },
      { icon: Handshake, text: "Acompanhamento contínuo" },
      { icon: ListChecks, text: "Missões semanais" },
    ],
  },
  {
    title: "Bônus Exclusivos",
    subtitle: "do Método",
    icon: Gift,
    color: "from-shiro300 to-warning",
    items: [
      { icon: null, text: "Ebook: Vida livre da compulsão" },
      { icon: null, text: "Guia de marmitas congeladas" },
      { icon: null, text: "Mini Aula: Sono e hormônios" },
      { icon: null, text: "Ebook: Lanches e sucos detox" },
    ],
  },
];

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

export default function MetodoSakura() {
  return (
    <section id="services" className="relative overflow-hidden">
      {/* ========== INTRO SECTION ========== */}
      <div className="relative bg-gradient-to-br from-murasaki100/25 via-shiro100 to-murasaki100/15 py-16">
        {/* Decorative sakura elements */}
        <div className="absolute left-10 top-20 text-6xl opacity-20">🌸</div>
        <div className="absolute right-20 top-40 text-4xl opacity-15">🌸</div>
        <div className="absolute bottom-10 left-1/4 text-5xl opacity-10">🌸</div>
        <div className="absolute -right-10 bottom-20 h-64 w-64 rounded-full bg-murasaki100/10 blur-3xl" />
        <div className="absolute -left-20 top-0 h-48 w-48 rounded-full bg-shiro200/30 blur-3xl" />

        <div className="container relative z-10 mx-auto max-w-5xl px-6">
          <div className="text-center">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-murasaki100/20 px-5 py-2 shadow-sm">
              <Flower size={24} className="text-murasaki200" weight="fill" />
              <span className="font-semibold text-murasaki200">
                CONHEÇA O MÉTODO
              </span>
            </div>

            {/* Title */}
            <h2 className="mb-6 text-4xl font-bold text-murasaki200 sm:text-5xl">
              Método Sakura
            </h2>

            {/* Description */}
            <p className="mx-auto mb-8 max-w-3xl text-lg leading-relaxed text-gray700">
              O <strong className="text-murasaki300">Método Sakura</strong> é um
              Programa Nutricional de{" "}
              <strong className="text-murasaki300">90 dias</strong> criado para
              mulheres brasileiras e latinas que vivem no Japão e desejam
              emagrecer com leveza, consciência e constância —{" "}
              <em>sem dietas impossíveis e sem culpa.</em>
            </p>

            {/* Inspiration Card */}
            <div className="mx-auto mb-8 max-w-3xl rounded-2xl border border-murasaki100/40 bg-white/80 p-8 shadow-lg backdrop-blur-sm">
              <p className="mb-6 text-gray700">
                Inspirado no ciclo da flor de cerejeira{" "}
                <span className="text-xl">🌸</span>{" "}
                <strong className="text-murasaki200">(Sakura)</strong> — símbolo
                japonês de renovação e recomeço — o método une:
              </p>

              {/* Method Unites Items */}
              <div className="mb-8 grid gap-4 text-left sm:grid-cols-2">
                {METHOD_UNITES.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-start gap-3 rounded-xl bg-gradient-to-r from-murasaki100/15 to-transparent p-4"
                    >
                      <Icon
                        size={24}
                        className="mt-0.5 shrink-0 text-murasaki200"
                      />
                      <span className="text-sm text-gray700">{item.text}</span>
                    </div>
                  );
                })}
              </div>

              {/* Promise */}
              <div className="rounded-xl bg-gradient-to-r from-midori100/15 to-midori100/5 p-6">
                <p className="mb-4 text-gray700">
                  Aqui, você não recebe apenas um plano alimentar.
                  <br />
                  <strong className="text-murasaki300">
                    Você recebe um processo de transformação completa
                  </strong>{" "}
                  — no corpo, na mente e na forma de viver.
                </p>
                <p className="text-lg font-semibold italic text-murasaki200">
                  "O florescer da mulher começa quando ela decide cuidar de si
                  com leveza."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========== 4 PHASES SECTION ========== */}
      <div className="relative bg-white py-16">
        {/* Decorative elements */}
        <div className="absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-murasaki100/30 via-murasaki100/50 to-murasaki100/30" />

        <div className="container relative z-10 mx-auto max-w-5xl px-6">
          {/* Section Header */}
          <div className="mb-12 text-center">
            <h3 className="mb-4 text-2xl font-bold text-murasaki200 sm:text-3xl">
              As 4 Fases do Método Sakura
            </h3>
            <p className="mx-auto max-w-2xl text-gray500">
              Como a flor de cerejeira que floresce em etapas, sua transformação
              também acontece gradualmente
            </p>
          </div>

          {/* Timeline */}
          <div className="space-y-8">
            {/* Fase 1 */}
            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-murasaki100 to-murasaki200 text-2xl shadow-lg">
                  🌱
                </div>
                <div className="mt-2 h-full w-px bg-murasaki100/30" />
              </div>
              <div className="flex-1 rounded-2xl bg-gradient-to-r from-murasaki100/10 to-transparent p-6">
                <h4 className="mb-1 text-lg font-bold text-murasaki300">
                  Fase 1: Solo
                </h4>
                <p className="text-sm font-medium text-murasaki200">
                  Preparação do terreno
                </p>
                <p className="mt-2 text-gray700">
                  Aqui você aprende os fundamentos da alimentação saudável
                  adaptada ao Japão e prepara seu corpo para a transformação.
                </p>
              </div>
            </div>

            {/* Fase 2 */}
            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-midori100 to-midori200 text-2xl shadow-lg">
                  🌿
                </div>
                <div className="mt-2 h-full w-px bg-midori100/30" />
              </div>
              <div className="flex-1 rounded-2xl bg-gradient-to-r from-midori100/10 to-transparent p-6">
                <h4 className="mb-1 text-lg font-bold text-midori200">
                  Fase 2: Brotar
                </h4>
                <p className="text-sm font-medium text-midori100">
                  Os primeiros resultados aparecem
                </p>
                <p className="mt-2 text-gray700">
                  Seu corpo começa a responder, o inchaço diminui e você sente
                  mais energia no dia a dia.
                </p>
              </div>
            </div>

            {/* Fase 3 */}
            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-shiro300 to-warning text-2xl shadow-lg">
                  🌸
                </div>
                <div className="mt-2 h-full w-px bg-shiro300/50" />
              </div>
              <div className="flex-1 rounded-2xl bg-gradient-to-r from-shiro200/50 to-transparent p-6">
                <h4 className="mb-1 text-lg font-bold text-murasaki300">
                  Fase 3: Florescer
                </h4>
                <p className="text-sm font-medium text-murasaki200">
                  A transformação se torna visível
                </p>
                <p className="mt-2 text-gray700">
                  Você emagrece de forma saudável, recupera sua autoestima e se
                  sente linda novamente.
                </p>
              </div>
            </div>

            {/* Fase 4 */}
            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-murasaki200 to-murasaki300 text-2xl shadow-lg">
                  🌳
                </div>
              </div>
              <div className="flex-1 rounded-2xl bg-gradient-to-r from-murasaki100/15 to-transparent p-6">
                <h4 className="mb-1 text-lg font-bold text-murasaki300">
                  Fase 4: Enraizar
                </h4>
                <p className="text-sm font-medium text-murasaki200">
                  Manutenção e consolidação
                </p>
                <p className="mt-2 text-gray700">
                  Você aprende a manter os resultados para sempre, criando
                  hábitos sustentáveis que se encaixam na sua vida.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========== WHAT YOU RECEIVE SECTION ========== */}
      <div className="relative bg-gradient-to-b from-shiro100 to-gray50 py-16">
        {/* Decorative elements */}
        <div className="absolute right-10 top-10 text-5xl opacity-10">🌸</div>
        <div className="absolute bottom-20 left-20 text-4xl opacity-15">🌸</div>
        <div className="absolute -left-20 top-1/2 h-64 w-64 rounded-full bg-midori100/10 blur-3xl" />

        <div className="container relative z-10 mx-auto max-w-6xl px-6">
          {/* Section Header */}
          <div className="mb-12 text-center">
            <h3 className="mb-4 text-2xl font-bold text-murasaki200 sm:text-3xl">
              O que você recebe no Método Sakura
            </h3>
            <p className="mx-auto max-w-2xl text-gray500">
              Tudo que você precisa para transformar sua relação com a comida
            </p>
          </div>

          {/* Pillars Grid */}
          <div className="grid gap-8 lg:grid-cols-3">
            {PILLARS.map((pillar, index) => {
              const PillarIcon = pillar.icon;
              return (
                <div
                  key={index}
                  className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg transition-all hover:shadow-xl"
                >
                  {/* Header - altura fixa */}
                  <div
                    className={`flex h-24 items-center gap-3 bg-gradient-to-r p-4 ${pillar.color}`}
                  >
                    <PillarIcon
                      size={32}
                      className="shrink-0 text-white"
                      weight="fill"
                    />
                    <div>
                      <h4 className="font-bold leading-tight text-white">
                        {pillar.title}
                      </h4>
                      <span className="text-sm text-white/80">
                        {pillar.subtitle}
                      </span>
                    </div>
                  </div>

                  {/* Items */}
                  <ul className="flex flex-1 flex-col justify-between gap-3 p-6">
                    {pillar.items.map((item, idx) => {
                      const ItemIcon = item.icon;
                      return (
                        <li key={idx} className="flex items-center gap-3">
                          {ItemIcon ? (
                            <ItemIcon
                              size={20}
                              className="shrink-0 text-murasaki200"
                            />
                          ) : (
                            <span className="shrink-0 text-lg">🎁</span>
                          )}
                          <span className="text-sm text-gray700">
                            {item.text}
                          </span>
                        </li>
                      );
                    })}
                  </ul>

                  {/* Decorative element */}
                  <div className="absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-gradient-to-br from-murasaki100/10 to-transparent transition-transform group-hover:scale-150" />
                </div>
              );
            })}
          </div>

          {/* Motivational Quote & CTA */}
          <div className="mt-12 rounded-2xl bg-gradient-to-r from-murasaki100/20 via-white to-midori100/20 p-8 text-center">
            <p className="mb-6 text-xl font-semibold italic text-gray700 sm:text-2xl">
              "Desistir não é opção. O caminho é leve, mas tem propósito."
            </p>
            <a
              href="https://wa.me/819038354891?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20Método%20Sakura."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-murasaki200 to-murasaki300 px-8 py-4 text-lg font-bold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl"
            >
              🌸 Quero começar minha transformação
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
