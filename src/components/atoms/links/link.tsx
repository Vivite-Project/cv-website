import { ReactNode } from 'react';
import clsx from 'clsx';

interface LinkProps {
  children: ReactNode;
  className?: string;
  href: string;
}

const Link: React.FC<LinkProps> = ({ className, children, href }) => {
  return (
    <a
      className={clsx(
        className,
        'group text-sm font-medium text-zinc-200 transition hover:text-red-400'
      )}
      href={href}
    >
      {children}
    </a>
  );
};

export default Link;
