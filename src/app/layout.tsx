import { ToastContainer } from "react-toastify";
import Footer from "@organisms/layout/footer";
import Header from "@organisms/layout/header";

import "react-toastify/dist/ReactToastify.css";
import "@/styles/globals.css";

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html
      lang="en"
      className="h-full"
    >
      <body className="h-full">
        <div className="flex justify-center bg-black sm:px-8 lg:px-16">
          <div className="flex w-full max-w-[76rem] flex-col bg-zinc-900 ring-1 ring-zinc-300/20">
            <Header />
            <main className="content-container flex-grow py-16 sm:py-32">
              {children}
            </main>
            <Footer />
            <ToastContainer />
          </div>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
