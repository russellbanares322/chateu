import { cn } from "@/lib/utils";
import { UserIcon } from "lucide-react";

const dummyChatData = Array.from({ length: 12 })
  .fill("")
  .map((_, index) => ({
    authorId: index % 2 === 0 ? "XXY" : `ABC-${index}`,
    message: "This is a sample message, test 123456.",
  }));

export default function ChatDisplay() {
  const userId = "XXY";

  return (
    <div>
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
  );
}
