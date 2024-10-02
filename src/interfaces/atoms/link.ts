export interface LinkProps {
  children: React.ReactNode;
  className?: string;
  href: string;
}

interface Link {
  href: string;
  text: string;
}

export default Link;
