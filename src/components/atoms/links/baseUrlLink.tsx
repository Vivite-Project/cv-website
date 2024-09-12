import clsx from "clsx";

import BaseUrlIcon from "@assets/icons/baseUrlIcon";
import getBaseUrl from "@helpers/getBaseUrl";

interface BaseUrlLinkProps {
  className?: string;
  href: string;
}

const BaseUrlLink: React.FC<BaseUrlLinkProps> = ({ className, href }) => {
  return (
    <a
      className={clsx(
        className,
        "group flex gap-2 text-sm font-medium text-zinc-200 transition hover:text-red-400"
      )}
      href={href}
    >
      <BaseUrlIcon className="h-6 w-6" />
      {getBaseUrl(href)}
    </a>
  );
};

export default BaseUrlLink;
