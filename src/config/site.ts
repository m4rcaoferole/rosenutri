/**
 * Single source of truth for contact info, institutional data, and CTAs.
 * Change values here instead of editing each component.
 */

export const CONTACT = {
  whatsappNumber: "819038354891", // E.164 without "+", used by wa.me
  phoneDisplay: "+81 90-3835-4891",
  email: "roseazuma@gmail.com",
  instagramUrl: "https://www.instagram.com/roseazuma.nutri",
  schedule: "Horário flexível para o seu turno",
  crn: "CRN-1 nº 4367",
  location: "Japão / Brasil (100% Online)",
} as const;

export const CTA_TEXT = "Quero minha rotina a meu favor";

export const WHATSAPP_MESSAGES = {
  general:
    "Olá! Gostaria de saber mais sobre o acompanhamento nutricional.",
  metodoSakura:
    "Olá, Rose! Vi o Método Sakura no seu site e quero saber como funciona.",
} as const;

export type WhatsAppMessageKey = keyof typeof WHATSAPP_MESSAGES;

/**
 * Builds a wa.me link with an optional pre-filled message.
 * encodeURIComponent handles spaces, accents and "?" safely.
 */
export function getWhatsAppUrl(message?: string): string {
  const baseUrl = `https://wa.me/${CONTACT.whatsappNumber}`;

  if (!message) return baseUrl;

  return `${baseUrl}?text=${encodeURIComponent(message)}`;
}
