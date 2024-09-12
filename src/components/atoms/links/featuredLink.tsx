import clsx from 'clsx';
import { ReactNode } from 'react';
import FeaturedIcon from '@/assets/icons/featuredIcon';

interface FeaturedLinkProps {
  children: ReactNode;
  className: string;
  href: string;
}

const FeaturedLink: React.FC<FeaturedLinkProps> = ({
  children,
  className,
  href,
}) => {
  return (
    <a
      className={clsx(
        className,
        'group flex gap-2 text-sm font-medium text-zinc-200 transition hover:text-red-400'
      )}
      href={href}
    >
      <FeaturedIcon className="h-6 w-6" />
      {children}
    </a>
  );
};

export default FeaturedLink;
