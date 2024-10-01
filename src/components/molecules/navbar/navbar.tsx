"use client";

import { usePathname } from "next/navigation";

import clsx from "clsx";
import { Page } from "@/payload-types";

import Link from "@atoms/links/link";

interface NavbarButtonProps {
  children: React.ReactNode;
  href: string;
}

const NavbarButton: React.FC<NavbarButtonProps> = ({ children, href }) => {
  const isActive = usePathname() === href;
  const className = isActive ? "!text-red-400" : "";

  return (
    <Link
      className={clsx(className, "relative block px-3 py-2")}
      href={href}
    >
      {children}
      {isActive && (
        <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-red-400/0 via-red-400/40 to-red-400/0" />
      )}
    </Link>
  );
};

interface NavbarProps {
  pages: Page[];
}

const Navbar: React.FC<NavbarProps> = ({ pages }) => {
  return (
    <nav className="hidden rounded-full bg-zinc-800/90 px-3 shadow-lg shadow-zinc-800/5 ring-1 ring-white/10 backdrop-blur md:block">
      <ul className="flex">
        {pages.map((page) => (
          <li key={page.id}>
            <NavbarButton href={"/" + page.slug}>{page.title}</NavbarButton>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
