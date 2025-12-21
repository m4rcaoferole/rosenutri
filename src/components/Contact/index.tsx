"use client";

import { Clock, Envelope, WhatsappLogo } from "@phosphor-icons/react";

export default function Contact() {
  return (
    <section id="contact" className="bg-gray50 py-16">
      <div className="container mx-auto max-w-4xl px-6 text-center">
        <h2 className="mb-2 text-3xl font-bold text-murasaki200">
          Vamos conversar?
        </h2>
        <p className="mx-auto mb-10 max-w-xl text-gray500">
          Estou pronta para te ajudar a transformar sua relação com a comida.
          Entre em contato e agende sua consulta!
        </p>

        {/* Main CTA - WhatsApp */}
        <a
          href="https://wa.me/819038354891?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20acompanhamento%20nutricional."
          target="_blank"
          rel="noopener noreferrer"
          className="group mb-10 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-midori100 to-midori200 px-8 py-4 text-lg font-bold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl"
        >
          <WhatsappLogo size={28} weight="fill" />
          Agendar pelo WhatsApp
        </a>

        {/* Additional Info */}
        <div className="mx-auto grid max-w-2xl gap-6 md:grid-cols-2">
          {/* Email */}
          <div className="flex items-center justify-center gap-4 rounded-xl bg-white p-6 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-murasaki100/10">
              <Envelope size={24} className="text-murasaki200" />
            </div>
            <div className="text-left">
              <p className="text-sm text-gray500">Email</p>
              <a
                href="mailto:contato@rosenutri.com"
                className="font-medium text-gray700 transition-colors hover:text-murasaki200"
              >
                contato@rosenutri.com
              </a>
            </div>
          </div>

          {/* Horário */}
          <div className="flex items-center justify-center gap-4 rounded-xl bg-white p-6 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-midori100/10">
              <Clock size={24} className="text-midori100" />
            </div>
            <div className="text-left">
              <p className="text-sm text-gray500">Horário de atendimento</p>
              <p className="font-medium text-gray700">Seg - Sex, 9h às 18h</p>
            </div>
          </div>
        </div>

        {/* Note */}
        <p className="mt-8 text-sm text-gray500">
          Atendimento 100% online — esteja no Japão, Brasil ou onde você
          estiver! 🌍
        </p>
      </div>
    </section>
  );
}
