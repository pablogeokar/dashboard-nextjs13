import clsx from "clsx";

interface ButtonProps {
  label: string;
  fullWidth?: boolean;
}

export function Button({ label, fullWidth }: ButtonProps) {
  return (
    <input
      type="button"
      value={label}
      className={clsx(
        `bg-blue-500 text-white p-3 rounded-md mt-4 cursor-pointer hover:bg-blue-950 transition duration-300 ease-in-out`,
        fullWidth && 'w-full'
      )}
    />
  );
}
