import { NavItem } from './NavItem';

interface OverlayMenuProps {
  title: string;
  href: string;
}

export default function OverlayMenu({ href, title }: OverlayMenuProps) {
  return (
    <ul className=" flex flex-col py-10 items-center z-10">
      <li>
        <NavItem href={href} title={title} />
      </li>
    </ul>
  );
}

