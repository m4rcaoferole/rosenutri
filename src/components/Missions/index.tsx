"use client";

import { NotePencil, Stethoscope, VideoCamera } from "@phosphor-icons/react";

export default function Services() {
  const services = [
    {
      title: "Planejamento Alimentar",
      descriptions: [
        "Plano alimentar 100% personalizado (nada de copiar e colar)",
        "Sugestões de substituições inteligentes e receitas simples",
        "Orientações práticas para lidar com eventos, viagens e rotina corrida",
      ],
      icon: NotePencil, // Substituir por ícones SVG ou imagens, se necessário
    },
    {
      title: "Consulta Nutricional",
      descriptions: [
        "Avaliação completa da sua rotina alimentar, saúde e objetivos.",
        "Recomendações personalizadas para suas necessidades.",
        "Orientações para hábitos saudáveis e metas sustentáveis.",
      ],
      icon: Stethoscope,
    },
    {
      title: "Acompanhamento Online",
      descriptions: [
        "Suporte contínuo com reuniões virtuais para ajustes no plano alimentar.",
        "Ferramentas de acompanhamento (como diário alimentar)",
        "Ajustes mensais e suporte próximo pelo WhatsApp",
      ],
      icon: VideoCamera,
    },
  ];

  return (
    <section
      id="services"
      className="bg-gray-50 border-t-4 border-t-purple700 py-16"
    >
      <div className="container mx-auto px-6 text-center">
        <h2 className="mb-8 text-3xl font-bold text-purple800">
          O que você recebe no acompanhamento
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {services.map((service, index) => {
            let Icon = service.icon;

            return (
              <div
                key={index}
                className="rounded bg-white p-6 shadow transition hover:shadow-lg hover:shadow-purple700/30"
              >
                <div className="mb-4 flex justify-center">
                  <Icon size={40} className="text-purple900" />
                </div>
                <h3 className="mb-4 text-xl font-semibold text-purple900">
                  {service.title}
                </h3>
                <ul className="space-y-2 text-left text-gray700">
                  {service.descriptions.map((item, idx) => (
                    <li
                      key={idx}
                      className="pt-2 before:mr-2 before:text-green900 before:content-['✔️']"
                    >
                      {item}
                    </li>
                  ))}
                </ul>{" "}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
