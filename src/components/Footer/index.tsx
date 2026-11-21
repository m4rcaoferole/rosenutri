import {
  Clock,
  Envelope,
  InstagramLogo,
  MapPin,
  Phone,
  WhatsappLogo,
} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";

import logoCreme from "@/assets/logo-rose-creme.png";
import { CONTACT, getWhatsAppUrl, WHATSAPP_MESSAGES } from "@/config/site";

const QUICK_LINKS = [
  { href: "#metodo", label: "Método" },
  { href: "#about", label: "Sobre" },
  { href: "#testimonials", label: "Depoimentos" },
  { href: "#faq", label: "FAQ" },
];

const SOCIAL_LINKS = [
  {
    href: CONTACT.instagramUrl,
    icon: InstagramLogo,
    label: "Instagram",
  },
  {
    href: getWhatsAppUrl(WHATSAPP_MESSAGES.metodoSakura),
    icon: WhatsappLogo,
    label: "WhatsApp",
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-murasaki300 text-white">
      <div className="container mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <Image
              src={logoCreme}
              alt="Logo Rose Azuma Nutri"
              width={130}
              height={52}
              className="mb-4 h-12 w-auto object-contain"
            />
            <p className="mb-4 max-w-sm text-base leading-relaxed text-white/90">
              Acompanhamento nutricional online para mulheres 40+ no Japão. Use
              a sua rotina como aliada no seu emagrecimento.
            </p>
            <p className="text-sm font-semibold text-shiro200 sm:text-base">
              {CONTACT.crn} | Nutricionista
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-serif text-lg font-semibold">
              Navegação
            </h4>
            <ul className="space-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex min-h-[36px] items-center text-base text-white/85 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4 font-serif text-lg font-semibold">Contato</h4>
            <ul className="space-y-3 text-sm text-white/90 sm:text-base">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="mt-0.5 shrink-0" aria-hidden="true" />
                <span>{CONTACT.location}</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={20} className="mt-0.5 shrink-0" aria-hidden="true" />
                <span>{CONTACT.schedule}</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={20} className="mt-0.5 shrink-0" aria-hidden="true" />
                <a
                  href={getWhatsAppUrl(WHATSAPP_MESSAGES.metodoSakura)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  {CONTACT.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Envelope size={20} className="mt-0.5 shrink-0" aria-hidden="true" />
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="transition-colors hover:text-white"
                >
                  {CONTACT.email}
                </a>
              </li>
            </ul>

            {/* Social Links */}
            <div className="mt-6 flex gap-3">
              {SOCIAL_LINKS.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-white/15 transition-colors hover:bg-white/25"
                    aria-label={social.label}
                  >
                    <Icon size={22} aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 border-t border-white/20 pt-6 text-center text-sm text-white/75">
          <p>© {currentYear} Rose Azuma Nutri. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
