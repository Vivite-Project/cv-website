import { ReactNode } from 'react';
import Header from '@/components/organisms/header';
import Footer from '@/components/organisms/footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex justify-center bg-black sm:px-8 lg:px-16">
      <div className="flex w-full max-w-[76rem] flex-col bg-zinc-900 ring-1 ring-zinc-300/20">
        <Header />
        <main className="content-container flex-grow py-16 sm:py-32">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
