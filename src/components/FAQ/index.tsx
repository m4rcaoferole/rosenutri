"use client";

import { CaretDown } from "@phosphor-icons/react";
import { useState } from "react";

import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { CTA_TEXT, WHATSAPP_MESSAGES } from "@/config/site";

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
      "As consultas são agendadas de acordo com os horários do Japão (JST), de forma flexível para se adaptar à sua rotina de trabalho. Atendo inclusive aos sábados.",
  },
  {
    question: "Preciso comprar alimentos brasileiros?",
    answer:
      "Não! O plano é adaptado aos alimentos disponíveis no Japão — supermercados japoneses, Gyomu Super, Don Quijote, etc. Você aproveita o que já tem por perto de forma saudável e equilibrada.",
  },
  {
    question: "Atende em espanhol também?",
    answer:
      "Sim! Atendo mulheres brasileiras e latinas 40+ que vivem no Japão. O acompanhamento pode ser em português ou espanhol.",
  },
  {
    question: "Não tenho tempo de cozinhar. Isso funciona para mim?",
    answer:
      "Sim. O plano é montado a partir da sua rotina, não o contrário. Você recebe opções práticas, com alimentos de mercado japonês, e o guia de marmitas congeladas, que é um dos bônus do Método Sakura.",
  },
  {
    question: "Tenho uma condição de saúde ou tomo medicação. Posso participar?",
    answer:
      "Pode, e o plano considera o seu histórico. Conte tudo na primeira conversa, e se for preciso, o acompanhamento é feito junto com o seu médico.",
  },
  {
    question: "E se eu não conseguir seguir o plano em alguma semana?",
    answer:
      "Acontece, e faz parte do processo. O plano é flexível, e o sistema antidesistência, com diário, missões semanais e acompanhamento contínuo, existe para você retomar sem culpa.",
  },
  {
    question: "Quanto custa e como faço para começar?",
    answer:
      "Os valores e as formas de pagamento são enviados pelo WhatsApp, junto com os horários disponíveis.",
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
    <div className="border-b border-murasaki100/30 last:border-b-0">
      <button
        type="button"
        onClick={onClick}
        className="flex min-h-[56px] w-full cursor-pointer items-center justify-between py-5 text-left transition-colors hover:text-murasaki300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-murasaki200"
        aria-expanded={isOpen}
      >
        <span className="pr-4 text-base font-semibold text-gray700 sm:text-lg">
          {question}
        </span>
        <CaretDown
          size={24}
          className={`shrink-0 text-murasaki200 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          aria-hidden="true"
        />
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-base leading-relaxed text-gray500">{answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white py-16 lg:py-20">
      <div className="container mx-auto max-w-3xl px-6">
        <h2 className="mb-3 text-center font-serif text-3xl font-bold text-murasaki200 sm:text-4xl">
          Perguntas Frequentes
        </h2>
        <p className="mb-10 text-center text-base text-gray500 sm:text-lg">
          Tire suas dúvidas sobre o acompanhamento nutricional
        </p>

        <div className="rounded-2xl border border-gray300/60 bg-gray50 p-6 shadow-sm sm:p-8">
          {FAQ_ITEMS.map((item, index) => (
            <FAQItem
              key={item.question}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>

        <div className="mt-10 text-center">
          <WhatsAppButton
            label={CTA_TEXT}
            message={WHATSAPP_MESSAGES.metodoSakura}
          />
        </div>
      </div>
    </section>
  );
}
