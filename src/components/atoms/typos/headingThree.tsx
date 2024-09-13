import clsx from "clsx";
import { TypoProps } from "@interfaces/typo";

const HeadingThree: React.FC<TypoProps> = ({ children, className }) => {
  return (
    <h3
      className={clsx(
        className,
        "text-base font-semibold tracking-tight text-zinc-100"
      )}
    >
      {children}
    </h3>
  );
};

export default HeadingThree;
