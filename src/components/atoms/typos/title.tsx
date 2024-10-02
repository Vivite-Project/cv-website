import clsx from "clsx";
import { TypoProps } from "@interfaces/atoms/typo";

const Title: React.FC<TypoProps> = ({ children, className }) => {
  return (
    <h1
      className={clsx(
        className,
        "text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl"
      )}
    >
      {children}
    </h1>
  );
};

export default Title;
