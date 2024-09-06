import { ReactNode } from "react";

interface LayoutProp {
  children: ReactNode;
}

const Layout: React.FC<LayoutProp> = ({ children }) => {
  return (
    <div className="h-full bg-black lg:px-16 sm:px-8 flex justify-center">
      <div className="h-full w-full max-w-7xl bg-zinc-900 ring-zinc-300/20 ring-1">
        {children}
      </div>
    </div>
  )
}

export default Layout;