import Image from 'next/image';
import logoRose from '../../assets/logo-rose-original.png';
import { NavItem } from './NavItem';

function Sidebar() {
  return (
    <div className='mx-auto max-w-6xl px-5'>
      <header className='flex justify-center items-center'>
        <Image src={logoRose} height={200} alt={''} />
      </header>

      <div className="h-px bg-slate-200" />

      <nav className='flex flex-row gap-4 justify-center py-2'>
        <NavItem title='Home' />
        <NavItem title='Consulta Online' />
        <NavItem title='Serviços' />
        <NavItem title='Sobre a Nutri' />
        <NavItem title='Contato' />
      </nav>

    </div>
  );
}

export default Sidebar;
 