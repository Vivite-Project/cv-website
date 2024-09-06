import { ReactNode } from 'react';

interface LayoutProp {
  children: ReactNode;
}

const Layout: React.FC<LayoutProp> = ({ children }) => {
  return (
    <div className="flex h-full justify-center bg-black sm:px-8 lg:px-16">
      <div className="h-full w-full max-w-7xl bg-zinc-900 ring-1 ring-zinc-300/20">
        {children}
      </div>
    </div>
  );
};

export default Layout;
