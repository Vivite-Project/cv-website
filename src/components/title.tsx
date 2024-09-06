import { ReactNode } from 'react';

interface LayoutProp {
  children: ReactNode;
}

const Title: React.FC<LayoutProp> = ({ children }) => {
  return (
    <h1 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl">
      {children}
    </h1>
  );
};

export default Title;
