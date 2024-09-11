import clsx from 'clsx';
import { ReactNode } from 'react';

interface SubheadingProps {
  children: ReactNode;
  className: string;
}

const Subheading: React.FC<SubheadingProps> = ({ children, className }) => {
  return (
    <h2
      className={clsx(
        className,
        'text-base font-semibold tracking-tight text-zinc-100'
      )}
    >
      {children}
    </h2>
  );
};

export default Subheading;
