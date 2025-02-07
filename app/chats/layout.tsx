export default function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-neutral-200 min-h-screen w-full">
      <div className="container">{children}</div>
    </div>
  );
}
