'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { List, X } from '@phosphor-icons/react';

import logoRose from '../../assets/logo-rose-original.png';
import { NavItem } from './NavItem';
import OverlayMenu from './OverlayMenu';

export const navLinks = [
  {
    title: 'Home',
    path: '#home',
  },
  {
    title: 'Consulta Online',
    path: '#online',
  },
  {
    title: 'Serviços',
    path: '#services',
  },
  {
    title: 'Sobre a Nutri',
    path: '#about',
  },
  {
    title: 'Contato',
    path: '#contact',
  },
];

function Sidebar() {
  const [navOpenMenu, setNavOpenMenu] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-shiro100 bg-opacity-90 ">
      <div className="flex flex-wrap items-center justify-between mx-auto px-8 md:py-6">
        <Link href={'/'} className="">
          <Image
            src={logoRose}
            alt={'Logo Rose Azuma Nutricionista'}
            className="size-40 md:size-32"
          />
        </Link>

        <div className="mobile-menu block md:hidden">
          {!navOpenMenu ? (
            <button
              type="button"
              onClick={() => setNavOpenMenu(true)}
              className="flex items-center text-slate-200 hover:text-white hover:border-white"
            >
              <List className="size-10" />
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setNavOpenMenu(false)}
              className="flex items-center text-slate-200 hover:text-white hover:border-white"
            >
              <X className="size-10" />
            </button>
          )}
        </div>

        <div className="menu hidden md:block md:w-auto" id="divbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((navLink, index) => (
              <li key={index}>
                <NavItem href={navLink.path} title={navLink.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navOpenMenu
        ? navLinks.map((navLink) => <OverlayMenu href={navLink.path} title={navLink.title} />)
        : null}
    </nav>
  );
}

export default Sidebar;
