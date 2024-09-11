import ChevronRightIcon from '@/assets/icons/chevronRightIcon';
import { ReactNode } from 'react';
import clsx from 'clsx';

interface StaticLinkProps {
  children: ReactNode;
  className?: string;
  href: string;
}

const StaticLink: React.FC<StaticLinkProps> = ({
  children,
  href,
  className,
}) => {
  return (
    <a
      className={clsx(
        className,
        'flex items-center gap-1 text-sm font-medium text-red-400'
      )}
      href={href}
    >
      {children}
      <ChevronRightIcon className="h-4 w-4 stroke-red-400" />
    </a>
  );
};

export default StaticLink;
