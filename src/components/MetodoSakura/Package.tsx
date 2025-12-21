"use client";

import {
    Calendar,
    DeviceMobile,
    Fire,
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

export default function MetodoSakuraPackage() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-shiro100 to-gray50 py-16">
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
                        <span className="text-sm text-gray700">{item.text}</span>
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
    </section>
  );
}
