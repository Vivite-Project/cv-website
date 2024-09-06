import { ReactNode } from 'react';

interface LayoutProp {
  children: ReactNode;
  href: string;
}

const Text: React.FC<LayoutProp> = ({ children, href }) => {
  return (
    <a
      className="text-sm font-medium text-zinc-200 transition hover:text-red-400"
      href={href}
    >
      {children}
    </a>
  );
};

export default Text;
