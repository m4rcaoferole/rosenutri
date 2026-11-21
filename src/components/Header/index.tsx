"use client";

import { List, WhatsappLogo, X } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import logoCreme from "@/assets/logo-rose-creme.png";
import logoOriginal from "@/assets/logo-rose-original.png";
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from "@/config/site";

const NAV_LINKS = [
  { href: "#metodo", label: "Método" },
  { href: "#about", label: "Sobre" },
  { href: "#testimonials", label: "Depoimentos" },
  { href: "#faq", label: "FAQ" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappHref = getWhatsAppUrl(WHATSAPP_MESSAGES.metodoSakura);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 shadow-lg backdrop-blur-md"
          : "bg-murasaki300/80 backdrop-blur-sm lg:bg-transparent lg:backdrop-blur-none"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link href="/" className="shrink-0" aria-label="Rose Azuma Nutri - Início">
          <Image
            src={isScrolled ? logoOriginal : logoCreme}
            alt="Logo Rose Azuma Nutri"
            width={120}
            height={48}
            className="h-11 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav
          aria-label="Navegação principal"
          className="hidden items-center gap-2 lg:flex"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`min-h-[44px] inline-flex items-center rounded-full px-4 py-2 text-base font-medium transition-colors duration-200 ${
                isScrolled
                  ? "text-gray700 hover:bg-murasaki100/10 hover:text-murasaki200"
                  : "text-white/95 hover:bg-white/15 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}

          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 inline-flex min-h-[44px] cursor-pointer items-center gap-2 rounded-full bg-midori100 px-5 py-2.5 text-sm font-bold text-white shadow-md transition-colors duration-200 hover:bg-midori200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-midori100 focus-visible:ring-offset-2"
          >
            <WhatsappLogo size={18} weight="fill" aria-hidden="true" />
            <span>Falar no WhatsApp</span>
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={`inline-flex min-h-[44px] min-w-[44px] cursor-pointer items-center justify-center rounded-full p-2 transition-colors lg:hidden ${
            isScrolled
              ? "text-murasaki200 hover:bg-murasaki100/10"
              : "text-white hover:bg-white/20"
          }`}
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isOpen}
        >
          {!isOpen ? <List size={28} /> : <X size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute left-0 right-0 top-full border-t border-murasaki100/20 bg-white/95 shadow-xl backdrop-blur-md lg:hidden">
          <nav
            aria-label="Navegação móvel"
            className="flex flex-col gap-1 px-6 py-4"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="min-h-[44px] flex items-center rounded-lg px-4 py-3 text-base font-medium text-gray700 transition-colors hover:bg-murasaki100/10 hover:text-murasaki200"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="mt-2 inline-flex min-h-[48px] cursor-pointer items-center justify-center gap-2 rounded-full bg-midori100 px-6 py-3 text-base font-bold text-white shadow-md transition-colors hover:bg-midori200"
            >
              <WhatsappLogo size={20} weight="fill" aria-hidden="true" />
              <span>Falar no WhatsApp</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
