import { ReactNode } from 'react';
import clsx from 'clsx';

interface LinkProps {
  children: ReactNode;
  className?: string;
  href: string;
}

const Text: React.FC<LinkProps> = ({ className, children, href }) => {
  return (
    <a
      className={clsx(
        'text-sm font-medium text-zinc-200 transition hover:text-red-400',
        className
      )}
      href={href}
    >
      {children}
    </a>
  );
};

export default Text;
