import { ReactNode } from 'react';
import Header from '@/components/molecules/header';
import Footer from '@/components/molecules/footer';

interface LayoutProp {
  children: ReactNode;
}

const Layout: React.FC<LayoutProp> = ({ children }) => {
  return (
    <div className="flex h-full justify-center bg-black sm:px-8 lg:px-16">
      <div className="flex h-full w-full max-w-7xl flex-col bg-zinc-900 ring-1 ring-zinc-300/20">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
