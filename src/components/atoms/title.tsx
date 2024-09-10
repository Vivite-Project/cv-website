import { ReactNode } from 'react';

interface TitleProps {
  children: ReactNode;
}

const Title: React.FC<TitleProps> = ({ children }) => {
  return (
    <h1 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl">
      {children}
    </h1>
  );
};

export default Title;
