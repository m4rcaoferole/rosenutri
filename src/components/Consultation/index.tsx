import { WhatsappLogo } from '@phosphor-icons/react';

export default function Consultation() {
  return (
    <section id="consultation" className="bg-white py-10">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-murasaki200 mb-8">
          Vamos começar sua transformação?
        </h2>
        <h3 className="font-semibold text-murasaki200 mb-8">
          Escolha o melhor horário e inicie um plano alimentar feito especialmente para você <br />—
          com leveza, estratégia e resultados reais.
        </h3>
        <div className="flex flex-col justify-center items-center mb-10">
          <ul className="space-y-2 text-left">
            <h4 className="font-semibold text-lg text-center mb-6">Como funciona o agendamento:</h4>
            <li>📍 1. Clique no botão abaixo para falar comigo no WhatsApp.</li>
            <li>📍 2. Escolha seu horário disponível.</li>
            <li>📍 3. Receba orientações e informações antes da consulta.</li>
            <li>📍 4. Horário marcados, encontros online (chamada de vídeo).</li>
          </ul>
        </div>
        <div className="flex flex-col justify-center items-center mb-10">
          <ul className="list-disc space-y-2 text-left">
            <h4 className="font-semibold text-lg text-center mb-6">O que está incluído:</h4>
            <li>Consulta nutricional individual (60 minutos)</li>
            <li>Avaliação completa da sua rotina, preferências e objetivos</li>
            <li>Plano alimentar personalizado adaptado aos alimentos disponíveis na sua região</li>
            <li>Suporte via WhatsApp para dúvidas entre as consultas</li>
            <li>Material complementar e receitas simples para facilitar seu dia a dia</li>
          </ul>
        </div>
        <div className="flex justify-center w-30 m-10">
          <a
            href="https://wa.me/819038354891"
            target="_blank"
            className="flex justify-center items-center bg-gradient-to-r from-murasaki300 to-murasaki100 text-white font-bold px-8 py-4 rounded shadow-lg hover:opacity-90 transition"
          >
            <WhatsappLogo size={30} className="inline mr-3" />
            <div>CLIQUE AQUI PARA AGENDAR PELO WHATSAPP</div>
          </a>
        </div>
      </div>
    </section>
  );
}
