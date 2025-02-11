import SendNewMessage from "./send-new-message";
import Sidebar from "./sidebar";

export default function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const hasChats = false;

  return (
    <div className="min-h-screen w-full">
      {hasChats && (
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
      )}
      {!hasChats && <SendNewMessage />}
    </div>
  );
}
