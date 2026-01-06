"use client";

import { CaretDown } from "@phosphor-icons/react";
import { useState } from "react";

const FAQ_ITEMS = [
  {
    question: "Como funciona o Método Sakura?",
    answer:
      "O Método Sakura é um programa nutricional de 90 dias com acompanhamento completo. Você recebe plano alimentar personalizado, 5 encontros online, acesso ao app da nutri, sistema antidesistência e bônus exclusivos. Tudo 100% online, do Japão para você.",
  },
  {
    question: "Funciona para quem trabalha em turnos (fábrica/kaigo)?",
    answer:
      "Sim! O método foi criado especialmente para mulheres que vivem no Japão e trabalham em turnos. O plano alimentar é adaptado à sua rotina e horários, seja turno diurno, noturno ou alternado.",
  },
  {
    question: "Como é feito o pagamento?",
    answer:
      "O pagamento pode ser feito em Iene (¥) via transferência bancária japonesa ou cartão de crédito. Para brasileiras, também aceitamos pagamento em Real. As informações são enviadas após o agendamento.",
  },
  {
    question: "As consultas são em que horário (fuso do Japão)?",
    answer:
      "As consultas são agendadas de acordo com os horários do Japão (JST), de forma flexível para se adaptar à sua rotina de trabalho. Atendo inclusive aos aos sábados.",
  },
  {
    question: "Preciso comprar alimentos brasileiros?",
    answer:
      "Não! O plano é adaptado aos alimentos disponíveis no Japão — supermercados japoneses, Gyomu Super, Don Quijote, etc. Você aproveita o que já tem por perto de forma saudável e equilibrada.",
  },
  {
    question: "Atende em espanhol também?",
    answer:
      "Sim! Atendo mulheres brasileiras e latinas (peruanas, filipinas, etc.) que vivem no Japão. O acompanhamento pode ser em português ou espanhol.",
  },
];

function FAQItem({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div className="border-b border-murasaki100/30">
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between py-5 text-left transition-colors hover:text-murasaki300"
        aria-expanded={isOpen}
      >
        <span className="pr-4 text-lg font-semibold text-gray-800">
          {question}
        </span>
        <CaretDown
          size={24}
          className={`shrink-0 text-murasaki200 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-gray-600 leading-relaxed">{answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white py-16">
      <div className="container mx-auto max-w-3xl px-6">
        <h2 className="mb-2 text-center text-3xl font-bold text-murasaki200">
          Perguntas Frequentes
        </h2>
        <p className="mb-10 text-center text-gray-600">
          Tire suas dúvidas sobre o acompanhamento nutricional
        </p>

        <div className="rounded-xl bg-gray-50 p-6 shadow-sm">
          {FAQ_ITEMS.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
