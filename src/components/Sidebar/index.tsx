import Image from 'next/image';
import logoRose from '../../assets/logo-rose-original.png';
import { NavItem } from './NavItem';

const navLinks = [
  {
    title: 'Home',
    path: '#home'
  },
  {
    title: 'Consulta Online',
    path: '#online'
  },
  {
    title: 'Serviços',
    path: '#services'
  },
  {
    title: 'Sobre a Nutri',
    path: '#about'
  },
  {
    title: 'Contato',
    path: '#contact'
  }
]

function Sidebar() {
  return (
    <nav className='fixed top-0 left-0 right-0 z-10 bg-shiro100 bg-opacity-90 '>
      <div className='flex flex-wrap items-center justify-evenly mx-auto'>
        <header className='flex justify-center items-center border-b border-midori100'>
          <Image src={logoRose} height={150} alt={''} />
        </header>

        <div className='flex flex-row gap-4 justify-center py-2' id='divbar'>
          {navLinks.map((navLink, index) => (
            <ul key={index}>
              <NavItem href={navLink.path} title={navLink.title} />
            </ul>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Sidebar;
 