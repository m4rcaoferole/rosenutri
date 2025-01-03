;'use client';
import Image from 'next/image';

import logoRose from '../../assets/logo-rose-original.png';
import logoCircle from '../../assets/logo-rose-circular-original.png';

function Sidebar() {

  return (
    <header className="bg-[#fff] top-0">
      <nav className="container max-w-none flex items-center justify-center px-6 z-40 md:justify-between md:shadow-lg md:shadow-murasaki100/20">
        <div className="hidden md:flex items-center space-x-1">
          <Image
            src={logoRose} // Substitua pelo caminho do seu ícone
            alt="Logo da Nutri"
            width={150}
            height={150}
          />
        </div>

        <div className="md:block md:hidden items-center space-x-1">
          <Image
            src={logoCircle} // Substitua pelo caminho do seu ícone
            alt="Logo da Nutri"
            width={200}
            height={200}
          />
        </div>

        {/* Links de Navegação (Desktop) */}
        <ul className="hidden md:flex space-x-8 gap-1">
          <li>
            <a
              href="#services"
              className="text-base hover:text-murasaki200 hover:font-semibold font-semibold transition"
            >
              Serviços
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="text-base hover:text-murasaki200 hover:font-semibold font-semibold transition"
            >
              Sobre a Nutri
            </a>
          </li>
          <li>
            <a
              href="#consultation"
              className="text-base hover:text-murasaki200 hover:font-semibold font-semibold transition"
            >
              Consulta Online
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/roseazumanutriemagrecimento"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base hover:text-murasaki200 hover:font-semibold font-semibold transition"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-base hover:text-murasaki200 hover:font-semibold font-semibold transition"
            >
              Contato
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Sidebar;
