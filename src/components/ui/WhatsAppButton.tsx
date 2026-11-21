import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";

import { CTA_TEXT, getWhatsAppUrl, WHATSAPP_MESSAGES } from "@/config/site";

interface WhatsAppButtonProps {
  label?: string;
  message?: string;
  variant?: "primary" | "light";
  className?: string;
}

const VARIANT_CLASSES: Record<NonNullable<WhatsAppButtonProps["variant"]>, string> = {
  primary:
    "bg-gradient-to-r from-midori100 to-midori200 text-white hover:from-midori200 hover:to-midori300",
  light: "bg-white text-midori200 hover:bg-shiro100",
};

/**
 * Primary conversion CTA linking to WhatsApp with consistent accessible styling.
 */
export default function WhatsAppButton({
  label = CTA_TEXT,
  message = WHATSAPP_MESSAGES.metodoSakura,
  variant = "primary",
  className = "",
}: WhatsAppButtonProps) {
  return (
    <a
      href={getWhatsAppUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex min-h-[48px] cursor-pointer items-center justify-center gap-3 rounded-full px-8 py-4 text-base font-bold shadow-lg transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-midori100 focus-visible:ring-offset-2 sm:text-lg ${VARIANT_CLASSES[variant]} ${className}`.trim()}
    >
      <WhatsappLogo size={26} weight="fill" className="shrink-0" aria-hidden="true" />
      <span>{label}</span>
    </a>
  );
}
