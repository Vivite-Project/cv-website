import { ReactNode } from 'react';
import clsx from 'clsx';

interface LinkProps {
  children: ReactNode;
  className?: string;
  href: string;
  icon?: React.ComponentType<{ className: string }>;
}

const Link: React.FC<LinkProps> = ({
  className,
  children,
  href,
  icon: Icon,
}) => {
  const iconClass = Icon ? 'group flex gap-4' : '';

  return (
    <a
      className={clsx(
        className,
        iconClass,
        'group text-sm font-medium text-zinc-200 transition hover:text-red-400'
      )}
      href={href}
    >
      {Icon && (
        <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-red-400"></Icon>
      )}
      {children}
    </a>
  );
};

export default Link;
