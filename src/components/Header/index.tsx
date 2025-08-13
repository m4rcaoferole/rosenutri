'use client';

import { List, X } from '@phosphor-icons/react';
import Image from 'next/image';
import { useState } from 'react';
import logoRose from '../../assets/logo-rose-original.png';

const NAV_LINKS = [
  { href: '#services', label: 'Serviços Nutricionais' },
  { href: '#about', label: 'Sobre a Nutri' },
  { href: '#consultation', label: 'Consulta Online' },
  {
    href: 'https://www.instagram.com/roseazumanutri',
    label: 'Instagram',
    external: true,
  },
  { href: '#contact', label: 'Contato' },
];

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white w-full shadow z-50">
      {/* <div className="container max-w-none flex items-center px-4 md:justify-between md:shadow-lg md:shadow-murasaki100/20"> */}
      <div className="max-w-6xl px-8 py-2 mx-auto flex justify-between items-center">
        <div className="hidden md:block">
          <Image src={logoRose} alt="Logo da Nutri" width={150} height={150} />
        </div>

        <div className="md:hidden px-8 flex justify-center items-center w-full">
          <div className="md:hidden ">
            <Image src={logoRose} alt="Logo da Circuclo Nutri" width={130} height={130} />
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden absolute right-8 text-3xl text-murasaki200 focus:outline-none"
            aria-label="Abrir menu"
          >
            {!isOpen ? <List size={28} color="#C087D7" /> : <X size={28} color="#C087D7" />}
          </button>
        </div>

        {/* Links de divegação (Desktop) */}
        <nav className="hidden md:flex gap-4 space-x-6">
          {NAV_LINKS.map((desktop) => (
            <a
              key={desktop.href}
              href={desktop.href}
              target={desktop.external ? '_blank' : '_self'}
              rel={desktop.external ? 'noopener noreferrer' : undefined}
              className="text-base font-semibold text-gray-800 hover hover:text-murasaki200"
            >
              {desktop.label}
            </a>
          ))}
        </nav>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="absolute w-full bg-white shadow-lg rounded-b-lg p-6 z-50">
          <nav className="flex items-center flex-col gap-4">
            {NAV_LINKS.map((mobile) => (
              <a
                key={mobile.href}
                href={mobile.href}
                target={mobile.external ? '_blank' : '_self'}
                rel={mobile.external ? 'noopener noreferrer' : undefined}
                className="text-lg font-semibold text-gray-800"
                onClick={() => setIsOpen(false)}
              >
                {mobile.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
