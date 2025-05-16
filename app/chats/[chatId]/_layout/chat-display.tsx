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
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { DropdownItem } from "@/constants/types";
import { cn } from "@/lib/utils";
import { Bell, EllipsisIcon, UserIcon, UserX } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

type ChatDisplayProps = {
  chatId: string;
};

const dummyChatData = Array.from({ length: 15 })
  .fill("")
  .map((_, index) => ({
    id: index,
    userId: index % 2 === 0 ? "XXY" : `ABC-${index}`,
    message: "This is a sample message, test 123456.",
  }));

const muteNotificationDurations = [
  {
    label: "For 15 minutes",
    value: "15mins",
  },
  {
    label: "For 1 hour",
    value: "1hr",
  },
  {
    label: "For 8 hours",
    value: "8hrs",
  },
  {
    label: "For 24 hours",
    value: "24hrs",
  },
  {
    label: "Until I turn it back on",
    value: "custom",
  },
];

export default function ChatDisplay({ chatId }: ChatDisplayProps) {
  const loggedUserId = "XXY";
  const router = useRouter();
  const [showBlockUserAlert, setShowBlockUserAlert] = useState(false);
  const [showMuteNotificationAlert, setShowMuteNotificationAlert] =
    useState(false);

  const userDropdownItems: DropdownItem[] = [
    {
      key: 1,
      label: "View profile",
      icon: <UserIcon />,
      action: () => router.push(`/profile/1`),
    },
    {
      key: 2,
      label: "Mute notifications",
      icon: <Bell />,
      action: () => setShowMuteNotificationAlert(true),
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
        className="flex flex-col gap-5 overflow-auto pt-7 mb-6 md:mb-0"
        style={{ maxHeight: "calc(100% - 410px)" }}
      >
        {dummyChatData.map((chat) => {
          const isMyChat = chat.userId === loggedUserId;
          return (
            <div
              className={cn(
                "flex items-center mx-3 gap-2",
                isMyChat ? "justify-end" : "justify-start",
              )}
              key={chat.id}
            >
              {!isMyChat && (
                <UserIcon
                  className="bg-blue-500 rounded-full p-2 text-white"
                  size={30}
                />
              )}
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
        onOpenChange={(open) => {
          setTimeout(() => {
            document.body.style.pointerEvents = "";
          }, 500);
          setShowBlockUserAlert(open);
        }}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              You will block this user, this action can be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Block</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Mute Notification Alert Confirmation Dialog */}
      <AlertDialog
        open={showMuteNotificationAlert}
        onOpenChange={(open) => {
          setTimeout(() => {
            document.body.style.pointerEvents = "";
          }, 500);
          setShowMuteNotificationAlert(open);
        }}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Mute conversation</AlertDialogTitle>
            <RadioGroup className="py-5 space-y-1">
              {muteNotificationDurations.map((item) => (
                <div
                  key={item.value}
                  className="flex items-center space-x-2 hover:bg-slate-50 px-2 py-1 rounded-md cursor-pointer"
                >
                  <RadioGroupItem value={item.value} id={item.value} />
                  <Label
                    className="text-md cursor-pointer"
                    htmlFor={item.value}
                  >
                    {item.label}
                  </Label>
                </div>
              ))}
            </RadioGroup>
            <AlertDialogDescription>
              Chat windows will stay closed and you won't get push notifications
              on your devices.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Mute</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
