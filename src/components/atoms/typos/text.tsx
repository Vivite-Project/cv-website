import clsx from "clsx";
import { TypoProps } from "@interfaces/typo";

const Text: React.FC<TypoProps> = ({ children, className }) => {
  return (
    <p className={clsx(className, "text-base text-zinc-400")}>{children}</p>
  );
};

export default Text;
