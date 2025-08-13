import { NotePencil, Stethoscope, VideoCamera } from '@phosphor-icons/react';

export default function Services() {
  const services = [
    {
      title: 'Planejamento Alimentar',
      descriptions: [
        'Plano alimentar 100% personalizado (nada de copiar e colar)',
        'Sugestões de substituições inteligentes e receitas simples',
        'Orientações práticas para lidar com eventos, viagens e rotina corrida',
      ],
      icon: NotePencil, // Substituir por ícones SVG ou imagens, se necessário
    },
    {
      title: 'Consulta Nutricional',
      descriptions: [
        'Avaliação completa da sua rotina alimentar, saúde e objetivos.',
        'Recomendações personalizadas para suas necessidades.',
        'Orientações para hábitos saudáveis e metas sustentáveis.',
      ],
      icon: Stethoscope,
    },
    {
      title: 'Acompanhamento Online',
      descriptions: [
        'Suporte contínuo com reuniões virtuais para ajustes no plano alimentar.',
        'Ferramentas de acompanhamento (como diário alimentar)',
        'Ajustes mensais e suporte próximo pelo WhatsApp',
      ],
      icon: VideoCamera,
    },
  ];

  return (
    <section id="services" className="border-t-4 border-t-murasaki100 bg-gray-50 py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-murasaki200 mb-8">
          O que você recebe no acompanhamento
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            let Icon = service.icon;

            return (
              <div
                key={index}
                className="bg-white shadow rounded p-6 hover:shadow-lg hover:shadow-murasaki100/30 transition"
              >
                <div className="flex justify-center mb-4">
                  <Icon size={40} className=" text-murasaki300" />
                </div>
                <h3 className="text-xl font-semibold text-murasaki300 mb-4">{service.title}</h3>
                <ul className="text-gray700 space-y-2 text-left">
                  {service.descriptions.map((item, idx) => (
                    <li
                      key={idx}
                      className="before:content-['✔️'] before:mr-2 pt-2 before:text-midori300"
                    >
                      {item}
                    </li>
                  ))}
                </ul>{' '}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
