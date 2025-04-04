"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DropdownItem } from "@/constants/types";
import { cn } from "@/lib/utils";
import { Bell, EllipsisIcon, UserIcon, UserX } from "lucide-react";
import { useState } from "react";

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
  const [showBlockUserAlert, setShowBlockUserAlert] = useState(false);

  // Implement showing of alert before blocking a user
  const userDropdownItems: DropdownItem[] = [
    {
      key: 1,
      label: "View profile",
      icon: <UserIcon />,
      action: () => console.log("View Profile"),
    },
    {
      key: 2,
      label: "Mute notifications",
      icon: <Bell />,
      action: () => console.log("Mute Notifications"),
    },
    {
      key: 3,
      divider: <DropdownMenuSeparator />,
    },
    {
      key: 4,
      label: "Block",
      icon: <UserX />,
      action: () => setShowBlockUserAlert(true),
    },
  ];

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
            {userDropdownItems.map((item) => {
              return (
                <div key={item.key}>
                  {!item.divider && (
                    <DropdownMenuItem onClick={item.action}>
                      {item.icon} {item.label}
                    </DropdownMenuItem>
                  )}
                  {item.divider && <DropdownMenuSeparator />}
                </div>
              );
            })}
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
      {/* Block User Alert Confirmation Dialog */}
      <AlertDialog
        open={showBlockUserAlert}
        onOpenChange={setShowBlockUserAlert}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
