
export default function Services() {
  const services = [
    {
      title: "Planejamento Alimentar",
      description: "Criação de cardápios personalizados para atender suas necessidades e objetivos.",
      icon: "🍎", // Substituir por ícones SVG ou imagens, se necessário
    },
    {
      title: "Consulta Nutricional",
      description: "Avaliação detalhada e orientações para melhorar sua saúde e bem-estar.",
      icon: "🩺",
    },
    {
      title: "Acompanhamento Online",
      description: "Suporte contínuo com reuniões virtuais para ajustes no plano alimentar.",
      icon: "💻",
    },
  ];

  return (
    <section id="services" className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-murasaki200 mb-8">Serviços</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-green-700 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
