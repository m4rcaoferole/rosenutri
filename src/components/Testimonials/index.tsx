import { StarIcon } from "@heroicons/react/24/outline";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Maria Silva",
      feedback:
        "A Rosemary Azuma transformou minha relação com a comida. Hoje me sinto mais saudável e feliz!",
      rating: 5,
    },
    {
      name: "João Souza",
      feedback:
        "Profissional atenciosa e dedicada. Recomendo para quem busca uma vida mais equilibrada.",
      rating: 5,
    },
    {
      name: "Ana Pereira",
      feedback:
        "Com planos personalizados, consegui alcançar meus objetivos de forma sustentável.",
      rating: 4,
    },
  ];

  return (
    <section id="testimonials" className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="mb-8 text-3xl font-bold text-purple800">
          Depoimentos
        </h2>
        <div className="space-y-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="rounded-lg bg-white p-6 shadow-lg">
              {/* Avaliação em estrelas */}
              <div className="mb-4 flex justify-center">
                {Array.from({ length: 5 }, (_, i) => (
                  <StarIcon
                    key={i}
                    className={`h-5 w-5 ${
                      i < testimonial.rating
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "{testimonial.feedback}"
              </p>
              <p className="text-green-700 font-semibold">
                - {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
