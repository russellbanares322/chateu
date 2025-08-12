import SendNewMessage from "./send-new-message";
import Sidebar from "./sidebar";

export default function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const hasChats = true;

  // Implement convex
  return (
    <div className="min-h-screen h-full w-full">
      {hasChats && (
        <div className="bg-black h-full grid grid-cols-8 min-h-screen">
          {/* Sidebar */}
          <div className="md:col-span-1 w-full h-full hidden md:block">
            <Sidebar />
          </div>
          {/* Main Content */}
          <div className="col-span-8 md:col-span-7 w-full max-h-[900px] h-full">
            <div className="bg-white p-10 m-7 rounded-xl h-auto">
              {children}
            </div>
          </div>
        </div>
      )}
      {!hasChats && <SendNewMessage />}
    </div>
  );
}
