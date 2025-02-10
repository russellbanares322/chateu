import Sidebar from "./sidebar";

export default function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen w-full">
      <div className="grid grid-cols-8 min-h-screen">
        {/* Left Content */}
        <div className="bg-red-400 col-span-1">
          <Sidebar />
        </div>
        {/* Main Content */}
        <div className="col-span-6 container">{children}</div>
        {/* Right Content */}
        <div className="bg-blue-400 col-span-1">Right Sidebar</div>
      </div>
    </div>
  );
}
