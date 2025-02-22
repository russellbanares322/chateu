import { Button } from "@/components/ui/button";
import { SendIcon } from "lucide-react";
import React from "react";

export default function ChatInput() {
  return (
    <div className="flex items-center bg-gray-100 gap-1 absolute rounded-md bottom-0 left-0 right-0 mx-auto w-[950px] mb-4 px-2">
      <textarea
        autoFocus
        className="border max-h-[900px] rounded-md p-1 bg-gray-100  w-full outline-none border-none resize-none"
        placeholder="Enter your chat here..."
      />
      <Button>
        Send <SendIcon />
      </Button>
    </div>
  );
}
