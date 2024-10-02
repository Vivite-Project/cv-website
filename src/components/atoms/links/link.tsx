import clsx from "clsx";
import { LinkProps } from "@interfaces/atoms/link";

const Link: React.FC<LinkProps> = ({ children, className, href }) => {
  return (
    <a
      className={clsx(
        className,
        "group text-sm font-medium text-zinc-200 transition hover:text-red-400"
      )}
      href={href}
    >
      {children}
    </a>
  );
};

export default Link;
