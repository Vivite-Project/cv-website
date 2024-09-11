import clsx from 'clsx';
import { ReactNode } from 'react';

interface TextProps {
  children: ReactNode;
  className?: string;
}

const Text: React.FC<TextProps> = ({ children, className }) => {
  return (
    <p className={clsx(className, 'text-base text-zinc-400')}>{children}</p>
  );
};

export default Text;
