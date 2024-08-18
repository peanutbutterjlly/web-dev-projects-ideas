export default function Button({
  children,
  ...delegated
}: React.ComponentProps<'button'>) {
  return (
    <button className="rounded bg-blue-500 px-4 py-2 text-white" {...delegated}>
      {children}
    </button>
  );
}
