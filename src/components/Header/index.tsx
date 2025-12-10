"use client";

import { List, X } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logoRose from "../../assets/logo-rose-original.png";

const NAV_LINKS = [
  { href: "#services", label: "Serviços Nutricionais" },
  { href: "#about", label: "Sobre a Nutri" },
  { href: "#consultation", label: "Consulta Online" },
  {
    href: "https://www.instagram.com/roseazumanutri",
    label: "Instagram",
    external: true,
  },
  { href: "#contact", label: "Contato" },
];

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="z-50 w-full bg-white shadow">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-8 py-2">
        <div className="hidden md:block">
          <Image src={logoRose} alt="Logo da Nutri" width={150} height={150} />
        </div>

        <div className="flex w-full items-center justify-center px-8 md:hidden">
          <div className="md:hidden">
            <Image
              src={logoRose}
              alt="Logo da Circuclo Nutri"
              width={130}
              height={130}
            />
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="absolute right-8 text-3xl text-purple800 focus:outline-none md:hidden"
            aria-label="Abrir menu"
          >
            {!isOpen ? (
              <List size={28} className="text-purple800" />
            ) : (
              <X size={28} className="text-purple800" />
            )}
          </button>
        </div>

        {/* Links de navegação (Desktop) */}
        <nav className="hidden gap-4 space-x-6 md:flex">
          {NAV_LINKS.map((desktop) => (
            <Link
              key={desktop.href}
              href={desktop.href}
              target={desktop.external ? "_blank" : "_self"}
              rel={desktop.external ? "noopener noreferrer" : undefined}
              className="text-gray-800 text-base font-semibold transition-colors hover:text-purple800"
            >
              {desktop.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="absolute z-50 w-full rounded-b-lg bg-white p-6 shadow-lg">
          <nav className="flex flex-col items-center gap-4">
            {NAV_LINKS.map((mobile) => (
              <Link
                key={mobile.href}
                href={mobile.href}
                target={mobile.external ? "_blank" : "_self"}
                rel={mobile.external ? "noopener noreferrer" : undefined}
                className="text-gray-800 text-lg font-semibold transition-colors hover:text-purple800"
                onClick={() => setIsOpen(false)}
              >
                {mobile.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
