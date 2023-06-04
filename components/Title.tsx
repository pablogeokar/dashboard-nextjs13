interface H1Props {
  children: React.ReactNode;
}

export function H1({ children }: H1Props) {
  return (
    <div className="mb-8">
      <h1 className="text-3xl font-semibold text-gray-700 ">{children}</h1>
      <div className="border-b-[1px] p-2" />
    </div>
  );
}
