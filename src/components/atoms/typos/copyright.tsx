import clsx from "clsx";

import { copyrightConfig } from "@configs/copyright.config";

interface CopyrightProps {
  className?: string;
}

const Copyright: React.FC<CopyrightProps> = ({ className }) => {
  return (
    <p className={clsx(className, "text-sm text-zinc-500")}>
      {copyrightConfig}
    </p>
  );
};

export default Copyright;
