import { Clock, Envelope } from "@phosphor-icons/react/dist/ssr";

import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { CONTACT, CTA_TEXT, WHATSAPP_MESSAGES } from "@/config/site";

export default function Contact() {
  return (
    <section id="contact" className="bg-gray50 py-16 lg:py-20">
      <div className="container mx-auto max-w-4xl px-6 text-center">
        <h2 className="mb-4 font-serif text-3xl font-bold text-murasaki200 sm:text-4xl">
          Vamos conversar?
        </h2>
        <p className="mx-auto mb-10 max-w-xl text-base leading-relaxed text-gray700 sm:text-lg">
          Eu estou pronta para te ajudar a usar a sua rotina como aliada no seu
          emagrecimento. Fale comigo pelo WhatsApp e veja os horários disponíveis
          para o seu turno.
        </p>

        {/* Main CTA */}
        <div className="mb-10">
          <WhatsAppButton
            label={CTA_TEXT}
            message={WHATSAPP_MESSAGES.metodoSakura}
          />
        </div>

        {/* Additional Info */}
        <div className="mx-auto grid max-w-2xl gap-6 md:grid-cols-2">
          {/* Email */}
          <div className="flex items-center justify-center gap-4 rounded-xl border border-gray300/60 bg-white p-6 shadow-sm">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-murasaki100/10">
              <Envelope size={24} className="text-murasaki200" aria-hidden="true" />
            </div>
            <div className="text-left">
              <p className="text-sm text-gray500">E-mail</p>
              <a
                href={`mailto:${CONTACT.email}`}
                className="text-base font-medium text-gray700 transition-colors hover:text-murasaki200"
              >
                {CONTACT.email}
              </a>
            </div>
          </div>

          {/* Schedule */}
          <div className="flex items-center justify-center gap-4 rounded-xl border border-gray300/60 bg-white p-6 shadow-sm">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-midori100/10">
              <Clock size={24} className="text-midori100" aria-hidden="true" />
            </div>
            <div className="text-left">
              <p className="text-sm text-gray500">Horário de atendimento</p>
              <p className="text-base font-medium text-gray700">
                {CONTACT.schedule}
              </p>
            </div>
          </div>
        </div>

        <p className="mt-8 text-base text-gray500">
          Atendimento 100% online — esteja no Japão, Brasil ou onde você
          estiver.
        </p>
      </div>
    </section>
  );
}
