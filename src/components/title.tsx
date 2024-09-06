import { ReactNode } from "react";

interface LayoutProp {
  children: ReactNode;
}

const Title: React.FC<LayoutProp> = ({ children }) => {
  return (
    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-zinc-100">
      {children}
    </h1>
  )
}

export default Title;