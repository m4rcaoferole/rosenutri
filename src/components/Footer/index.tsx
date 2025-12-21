"use client";

import {
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import { InstagramLogo, WhatsappLogo } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";

import logoRose from "../../assets/logo-rose-original.png";

const QUICK_LINKS = [
  { href: "#services", label: "Serviços" },
  { href: "#specialties", label: "Áreas de Atuação" },
  { href: "#about", label: "Sobre a Nutri" },
  { href: "#testimonials", label: "Depoimentos" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contato" },
];

const SOCIAL_LINKS = [
  {
    href: "https://www.instagram.com/roseazuma.nutri",
    icon: InstagramLogo,
    label: "Instagram",
  },
  {
    href: "https://wa.me/819038354891",
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
              src={logoRose}
              alt="Logo Rose Nutri"
              width={120}
              height={120}
              className="mb-4 brightness-0 invert"
            />
            <p className="mb-4 max-w-sm text-sm leading-relaxed text-white/80">
              Acompanhamento nutricional online personalizado. Transforme sua
              relação com a comida e conquiste uma vida mais saudável e
              equilibrada.
            </p>
            <p className="text-sm font-medium text-white/90">
              CRN-X: 12345 | Nutricionista
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">Links Rápidos</h4>
            <ul className="space-y-2">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/80 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-white/80">
                <MapPinIcon className="h-5 w-5 shrink-0" />
                <span>Japão / Brasil (Online)</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/80">
                <PhoneIcon className="h-5 w-5 shrink-0" />
                <a
                  href="https://wa.me/819038354891"
                  className="transition-colors hover:text-white"
                >
                  +81 90-3835-4891
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/80">
                <EnvelopeIcon className="h-5 w-5 shrink-0" />
                <a
                  href="mailto:roseazuma@gmail.com"
                  className="transition-colors hover:text-white"
                >
                  roseazuma@gmail.com
                </a>
              </li>
            </ul>

            {/* Social Links */}
            <div className="mt-6 flex gap-4">
              {SOCIAL_LINKS.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
                    aria-label={social.label}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 border-t border-white/20 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-white/60 md:flex-row">
            <p>© {currentYear} Rose Azuma Nutri. Todos os direitos reservados.</p>
            <div className="flex gap-6">
              <Link href="#" className="transition-colors hover:text-white">
                Termos de Uso
              </Link>
              <Link href="#" className="transition-colors hover:text-white">
                Política de Privacidade
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
