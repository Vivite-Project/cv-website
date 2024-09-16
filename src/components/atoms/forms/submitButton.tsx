import clsx from "clsx";

interface SubmitButtonProps {
  className?: string;
  isSubmitting: boolean;
  label: string;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({
  className,
  isSubmitting,
  label,
}) => {
  return (
    <button
      type="submit"
      disabled={isSubmitting}
      className={clsx(
        className,
        "rounded-md bg-zinc-800/90 px-6 py-2 font-semibold text-zinc-100 ring-zinc-400 transition hover:bg-zinc-800 active:bg-zinc-800/80"
      )}
    >
      {isSubmitting ? "Submitting..." : label}
    </button>
  );
};

export default SubmitButton;
