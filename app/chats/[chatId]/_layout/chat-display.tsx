import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { EllipsisIcon, UserIcon } from "lucide-react";

const dummyChatData = Array.from({ length: 15 })
  .fill("")
  .map((_, index) => ({
    authorId: index % 2 === 0 ? "XXY" : `ABC-${index}`,
    message: "This is a sample message, test 123456.",
  }));

export default function ChatDisplay() {
  const userId = "XXY";

  return (
    <div className="relative">
      {/* Chat Header */}
      <div className="border-b w-full  bg-white sticky flex items-center justify-between mb-2 gap-2 py-2">
        <div className="flex items-start gap-2">
          <UserIcon
            className="bg-blue-500 rounded-full p-2 text-white"
            size={30}
          />
          <p>Sample Name</p>
        </div>
        <div>
          <Button className="rounded-full" size="icon" variant="ghost">
            <EllipsisIcon size={35} />
          </Button>
        </div>
      </div>
      {/* Chat Content */}
      <div
        className="flex flex-col gap-5 overflow-auto pt-7"
        style={{ maxHeight: "calc(100% - 410px)" }}
      >
        {dummyChatData.map((chat, index) => {
          const isMyChat = chat.authorId === userId;
          return (
            <div
              className={cn(
                "flex items-center mx-3 gap-2",
                isMyChat ? "justify-end" : "justify-start",
              )}
              key={index}
            >
              {!isMyChat && <UserIcon />}
              <div className="bg-slate-200 p-2 rounded-xl">
                <p>{chat.message}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
