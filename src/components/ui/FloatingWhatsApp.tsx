import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";

import { getWhatsAppUrl, WHATSAPP_MESSAGES } from "@/config/site";

/**
 * Persistent mobile-friendly WhatsApp entry point at the bottom-right viewport corner.
 */
export default function FloatingWhatsApp() {
  return (
    <a
      href={getWhatsAppUrl(WHATSAPP_MESSAGES.metodoSakura)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a Rose no WhatsApp"
      className="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 cursor-pointer items-center justify-center gap-2.5 rounded-full bg-midori100 text-white shadow-xl transition-colors duration-200 hover:bg-midori200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-midori100 focus-visible:ring-offset-2 sm:h-auto sm:w-auto sm:px-5 sm:py-3.5"
    >
      <WhatsappLogo size={26} weight="fill" className="shrink-0" aria-hidden="true" />
      <span className="hidden text-sm font-bold sm:inline">WhatsApp</span>
    </a>
  );
}
