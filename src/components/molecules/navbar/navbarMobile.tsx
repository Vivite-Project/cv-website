"use client";

import { usePathname } from "next/navigation";

import clsx from "clsx";
import {
  Popover,
  PopoverBackdrop,
  PopoverButton,
  PopoverPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";

import ChevronDownIcon from "@assets/icons/chevronDownIcon";
import CloseIcon from "@assets/icons/closeIcon";
import Link from "@atoms/links/link";
import { pagesConfig } from "@configs/pages.config";

interface NavbarButtonProps {
  children: React.ReactNode;
  href: string;
}

const NavbarMobileButton: React.FC<NavbarButtonProps> = ({
  children,
  href,
}) => {
  const isActive = usePathname() === href;
  const className = isActive ? "!text-red-400" : "";

  return (
    <Link
      className={clsx(className, "block py-2 !text-base")}
      href={href}
    >
      {children}
    </Link>
  );
};

const NavbarMobile: React.FC = () => {
  return (
    <Popover className="md:hidden">
      <PopoverButton className="group flex items-center rounded-full bg-zinc-800/90 px-4 py-2 text-sm font-medium text-zinc-200 shadow-lg shadow-zinc-800/5 ring-1 ring-white/10 backdrop-blur hover:ring-white/20">
        Menu
        <ChevronDownIcon className="ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-400" />
      </PopoverButton>
      <Transition>
        <TransitionChild
          enter="duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <PopoverBackdrop className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm" />
        </TransitionChild>
        <TransitionChild
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <PopoverPanel
            focus
            className="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-zinc-900 p-8 ring-1 ring-zinc-800"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-medium text-zinc-400">Navigation</h2>
              <PopoverButton
                aria-label="Close menu"
                className="-m-1 p-1"
              >
                <CloseIcon className="h-6 w-6 text-zinc-400" />
              </PopoverButton>
            </div>
            <nav className="mt-6">
              <ul className="-my-2 divide-y divide-zinc-100/5 text-base text-zinc-300">
                {pagesConfig.map((page) => (
                  <li key={page.id}>
                    <NavbarMobileButton href={page.href}>
                      {page.name}
                    </NavbarMobileButton>
                  </li>
                ))}
              </ul>
            </nav>
          </PopoverPanel>
        </TransitionChild>
      </Transition>
    </Popover>
  );
};

export default NavbarMobile;
