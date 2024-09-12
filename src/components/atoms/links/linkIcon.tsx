import { IconProps } from "@interfaces/icon";

interface LinkIconProps {
  children: React.ReactNode;
  href: string;
  icon: React.ComponentType<IconProps>;
}

const LinkIcon: React.FC<LinkIconProps> = ({ children, href, icon: Icon }) => {
  return (
    <a
      className="group flex gap-4 text-sm font-medium text-zinc-200 transition hover:text-red-400"
      href={href}
    >
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-red-400"></Icon>
      {children}
    </a>
  );
};

export default LinkIcon;
