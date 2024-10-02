import clsx from "clsx";
import ChevronRightIcon from "@assets/icons/chevronRightIcon";
import { LinkProps } from "@interfaces/atoms/link";

const StaticLink: React.FC<LinkProps> = ({ children, className, href }) => {
  return (
    <a
      className={clsx(
        className,
        "flex items-center gap-1 text-sm font-medium text-red-400"
      )}
      href={href}
    >
      {children}
      <ChevronRightIcon className="h-4 w-4 stroke-red-400" />
    </a>
  );
};

export default StaticLink;
