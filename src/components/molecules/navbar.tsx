import Link from '@/components/atoms/link';
import { pagesConfig } from '@/configs/pages.config';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import { ReactNode, useEffect } from 'react';

interface NavbarButtonProps {
  children: ReactNode;
  href: string;
}

const NavbarButton: React.FC<NavbarButtonProps> = ({ children, href }) => {
  const isActive = usePathname() === href;
  const className = isActive ? '!text-red-400' : '';

  return (
    <Link className={clsx('relative block px-3 py-2', className)} href={href}>
      {children}
      {isActive && (
        <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-red-400/0 via-red-400/40 to-red-400/0" />
      )}
    </Link>
  );
};

const Navbar: React.FC = () => {
  return (
    <nav className="hidden rounded-full bg-zinc-800/90 px-3 shadow-lg shadow-zinc-800/5 ring-1 ring-white/10 backdrop-blur md:block">
      <ul className="flex">
        {pagesConfig.map((page) => (
          <li key={page.id}>
            <NavbarButton href={page.href}>{page.name}</NavbarButton>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
