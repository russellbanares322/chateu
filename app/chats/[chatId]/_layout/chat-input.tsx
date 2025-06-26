"use client";

import { Button } from "@/components/ui/button";
import { SendIcon, SmileIcon } from "lucide-react";
import EmojiPicker from "emoji-picker-react";
import { useState } from "react";

export default function ChatInput() {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [inputs, setInputs] = useState<string[]>([]);
  const onToggleShowEmojiPicker = () => {
    setShowEmojiPicker((prev) => !prev);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const message = formData.get("message");
    alert(message);
  };

  const onInputChange = (value: string) => {
    const newInputs = [...inputs];
    newInputs.push(value);
    setInputs(newInputs);
  };

  return (
    <form
      onSubmit={onSubmit}
      className="flex items-center bg-gray-100 gap-1 absolute rounded-md bottom-0 left-0 right-0 mx-0 md:mx-auto w-auto max-w-[950px] mb-0 md:mb-4 px-2 translate-y-1 md:translate-y-0"
    >
      <textarea
        autoFocus
        className="border max-h-[900px] rounded-md p-1 bg-gray-100  w-full outline-none border-none resize-none"
        placeholder="Enter your chat here..."
        name="message"
        onChange={(e) => onInputChange(e.target.value)}
        value={inputs.join("")}
        onKeyDown={(e) => {
          if (e.key === "Backspace") {
            const newInputs = [...inputs];
            newInputs.pop();
            setInputs(newInputs);
          }
        }}
      />
      <div className="flex items-center gap-3">
        <div className="relative">
          <SmileIcon
            onClick={onToggleShowEmojiPicker}
            className="cursor-pointer"
            size={20}
          />
          {showEmojiPicker && (
            <div className="absolute bottom-6 right-3">
              <EmojiPicker onEmojiClick={(val) => onInputChange(val.emoji)} />
            </div>
          )}
        </div>
        <Button type="submit">
          Send <SendIcon />
        </Button>
      </div>
    </form>
  );
}
