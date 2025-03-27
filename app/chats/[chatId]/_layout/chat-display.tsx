import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import {
  Bell,
  EllipsisIcon,
  MoreHorizontal,
  UserIcon,
  UserX,
} from "lucide-react";

type ChatDisplayProps = {
  chatId: string;
};

const dummyChatData = Array.from({ length: 15 })
  .fill("")
  .map((_, index) => ({
    id: index,
    authorId: index % 2 === 0 ? "XXY" : `ABC-${index}`,
    message: "This is a sample message, test 123456.",
  }));

export default function ChatDisplay({ chatId }: ChatDisplayProps) {
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
          <p>{`User ${chatId}`}</p>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="rounded-full" size="icon" variant="ghost">
              <EllipsisIcon size={35} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>
              <UserIcon /> View profile
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Bell />
              Mute notifications
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <UserX /> Block
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      {/* Chat Content */}
      <div
        className="flex flex-col gap-5 overflow-auto pt-7"
        style={{ maxHeight: "calc(100% - 410px)" }}
      >
        {dummyChatData.map((chat) => {
          const isMyChat = chat.authorId === userId;
          return (
            <div
              className={cn(
                "flex items-center mx-3 gap-2",
                isMyChat ? "justify-end" : "justify-start",
              )}
              key={chat.id}
            >
              {!isMyChat && <UserIcon />}
              <div
                className={cn(
                  "bg-slate-200 p-2",
                  isMyChat
                    ? "rounded-tl-xl rounded-bl-xl rounded-tr-xl rounded-br-sm"
                    : "rounded-tl-xl rounded-br-xl rounded-tr-xl rounded-bl-sm",
                )}
              >
                <p>{chat.message}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
