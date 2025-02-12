import SendNewMessage from "./send-new-message";
import Sidebar from "./sidebar";

export default function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const hasChats = true;

  return (
    <div className="min-h-screen h-full w-full">
      {hasChats && (
        <div className="bg-black h-full grid grid-cols-8 min-h-screen">
          {/* Sidebar */}
          <div className="col-span-1 w-full h-full">
            <Sidebar />
          </div>
          {/* Main Content */}
          <div className="col-span-7 w-full max-h-[900px] h-full">
            <div className="bg-white p-10 m-7 rounded-xl h-full">
              {children}
            </div>
          </div>
        </div>
      )}
      {!hasChats && <SendNewMessage />}
    </div>
  );
}
