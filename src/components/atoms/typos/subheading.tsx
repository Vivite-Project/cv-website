import clsx from "clsx";
import { TypoProps } from "@interfaces/atoms/typo";

const Subheading: React.FC<TypoProps> = ({ children, className }) => {
  return (
    <h2
      className={clsx(
        className,
        "text-base font-semibold tracking-tight text-zinc-100"
      )}
    >
      {children}
    </h2>
  );
};

export default Subheading;
