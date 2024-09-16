import clsx from "clsx";
import { ErrorMessage, Field } from "formik";

interface InputTextProps {
  className?: string;
  id: string;
  label: string;
  required?: boolean;
  error?: boolean | string;
}

const InputText: React.FC<InputTextProps> = ({
  className,
  id,
  label,
  required,
  error,
}) => {
  const borderColor = error ? "border-red-400" : "border-zinc-400";

  return (
    <div className={clsx(className, "relative")}>
      <label
        htmlFor={id}
        className="block text-base font-semibold tracking-tight text-zinc-100"
      >
        {label}
        {required && <span className="text-red-400"> *</span>}
      </label>
      <Field
        type="text"
        id={id}
        name={id}
        className={clsx(
          borderColor,
          "mt-2 block w-full rounded-t-md border-b-2 bg-zinc-800/90 px-4 py-2 text-zinc-200 focus:outline-none"
        )}
      />
      <ErrorMessage
        name={id}
        component="div"
        className="absolute right-0 top-1 text-xs text-red-400"
      />
    </div>
  );
};

export default InputText;
