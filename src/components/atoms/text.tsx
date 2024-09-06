import { ReactNode } from 'react';

interface LayoutProp {
  children: ReactNode;
}

const Text: React.FC<LayoutProp> = ({ children }) => {
  return <p className="text-base text-zinc-400">{children}</p>;
};

export default Text;
