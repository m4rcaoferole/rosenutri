"use client";

import { List, X } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import logoRose from "../../assets/logo-rose-original.png";

const NAV_LINKS = [
  { href: "#services", label: "Serviços" },
  { href: "#specialties", label: "Áreas" },
  { href: "#about", label: "Sobre" },
  { href: "#testimonials", label: "Depoimentos" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contato" },
  {
    href: "https://www.instagram.com/roseazuma.nutri",
    label: "Instagram",
    external: true,
  },
];

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 shadow-lg backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image
            src={logoRose}
            alt="Logo Rose Nutri"
            width={120}
            height={120}
            className={`transition-all duration-300 ${
              isScrolled ? "" : "brightness-0 invert"
            }`}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              target={link.external ? "_blank" : "_self"}
              rel={link.external ? "noopener noreferrer" : undefined}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                isScrolled
                  ? "text-gray700 hover:bg-murasaki100/10 hover:text-murasaki200"
                  : "text-white/90 hover:bg-white/20 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`rounded-full p-2 transition-colors lg:hidden ${
            isScrolled
              ? "text-murasaki200 hover:bg-murasaki100/10"
              : "text-white hover:bg-white/20"
          }`}
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        >
          {!isOpen ? <List size={28} /> : <X size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute left-0 right-0 top-full border-t border-murasaki100/20 bg-white/95 shadow-xl backdrop-blur-md lg:hidden">
          <nav className="flex flex-col px-6 py-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                target={link.external ? "_blank" : "_self"}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="rounded-lg px-4 py-3 text-base font-medium text-gray700 transition-colors hover:bg-murasaki100/10 hover:text-murasaki200"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
