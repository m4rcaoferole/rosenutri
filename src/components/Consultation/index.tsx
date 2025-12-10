"use client";

import { WhatsappLogo } from "@phosphor-icons/react";

export default function Consultation() {
  return (
    <section id="consultation" className="bg-white py-10">
      <div className="container mx-auto px-6 text-center">
        <h2 className="mb-8 text-3xl font-bold text-purple800">
          Vamos começar sua transformação?
        </h2>
        <h3 className="mb-8 font-semibold text-purple800">
          Escolha o melhor horário e inicie um plano alimentar feito
          especialmente para você <br />— com leveza, estratégia e resultados
          reais.
        </h3>
        <div className="mb-10 flex flex-col items-center justify-center">
          <ul className="space-y-2 text-left">
            <h4 className="mb-6 text-center text-lg font-semibold">
              Como funciona o agendamento:
            </h4>
            <li>📍 1. Clique no botão abaixo para falar comigo no WhatsApp.</li>
            <li>📍 2. Escolha seu horário disponível.</li>
            <li>📍 3. Receba orientações e informações antes da consulta.</li>
            <li>
              📍 4. Horário marcados, encontros online (chamada de vídeo).
            </li>
          </ul>
        </div>
        <div className="mb-10 flex flex-col items-center justify-center">
          <ul className="list-disc space-y-2 text-left">
            <h4 className="mb-6 text-center text-lg font-semibold">
              O que está incluído:
            </h4>
            <li>Consulta nutricional individual (60 minutos)</li>
            <li>Avaliação completa da sua rotina, preferências e objetivos</li>
            <li>
              Plano alimentar personalizado adaptado aos alimentos disponíveis
              na sua região
            </li>
            <li>Suporte via WhatsApp para dúvidas entre as consultas</li>
            <li>
              Material complementar e receitas simples para facilitar seu dia a
              dia
            </li>
          </ul>
        </div>
        <div className="w-30 m-10 flex justify-center">
          <a
            href="https://wa.me/819038354891"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center rounded bg-gradient-to-r from-purple900 to-purple700 px-8 py-4 font-bold text-white shadow-lg transition hover:opacity-90"
          >
            <WhatsappLogo size={30} className="mr-3 inline" />
            <div>CLIQUE AQUI PARA AGENDAR PELO WHATSAPP</div>
          </a>
        </div>
      </div>
    </section>
  );
}
