import clsx from "clsx";

import copyright from "@configs/copyright.config";

interface CopyrightProps {
  className?: string;
}

const Copyright: React.FC<CopyrightProps> = ({ className }) => {
  return (
    <p className={clsx(className, "text-sm text-zinc-500")}>{copyright}</p>
  );
};

export default Copyright;
