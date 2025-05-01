'use client';

import Image from 'next/image';
import { useState } from 'react';
import logoCircle from '../../assets/logo-rose-circular-original.png';
import logoRose from '../../assets/logo-rose-original.png';

const NAV_LINKS = [
  { href: '#services', label: 'Serviços' },
  { href: '#about', label: 'Sobre a Nutri' },
  { href: '#consult', label: 'Consulta Online' },
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
    <header className="bg-white top-0 w-full shadow-md z-50 relative">
      {/* <div className="container max-w-none flex items-center px-4 md:justify-between md:shadow-lg md:shadow-murasaki100/20"> */}
      <div className="max-w-6xl mx-auto flex justify-between items-center ">
        <div className="hidden md:block">
          <Image src={logoRose} alt="Logo da Nutri" width={150} height={150} />
        </div>

        <div className="md:hidden px-8 flex items-center w-full relative">
          <div className="md:hidden ">
            <Image src={logoCircle} alt="Logo da Circuclo Nutri" width={130} height={130} />
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden absolute right-8 text-3xl text-murasaki200 focus:outline-none"
            aria-label="Abrir menu"
          >
            {!isOpen ? '☰' : 'x'}
          </button>
        </div>

        {/* Links de divegação (Desktop) */}
        <nav className="hidden md:flex space-x-8 font-semibold">
          {NAV_LINKS.map((desktop) => (
            <a
              key={desktop.href}
              href={desktop.href}
              target={desktop.external ? '_blank' : '_self'}
              className="text-base font-semibold text-gray-800 hover hover:text-murasaki200"
            >
              {desktop.label}
            </a>
          ))}
        </nav>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="bg-white top-full pb-8 shadow-lg">
          <nav className="flex items-center flex-col gap-3">
            {NAV_LINKS.map((mobile) => (
              <a
                key={mobile.href}
                href={mobile.href}
                target={mobile.external ? '_blank' : '_self'}
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
