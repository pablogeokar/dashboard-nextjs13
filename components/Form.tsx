interface FormProps {
  children: React.ReactNode;
}

export function Form({ children }: FormProps) {
  return (
    <form
      method="POST"
      className="p-5 bg-white rounded-md border shadow-sm min-w-[350px]"
    >
      {children}
    </form>
  );
}
