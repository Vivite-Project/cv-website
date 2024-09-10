import { ReactNode } from 'react';

interface TextProps {
  children: ReactNode;
}

const Text: React.FC<TextProps> = ({ children }) => {
  return <p className="text-base text-zinc-400">{children}</p>;
};

export default Text;
