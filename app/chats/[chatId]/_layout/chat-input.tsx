"use client";

import { Button } from "@/components/ui/button";
import { SendIcon, SmileIcon } from "lucide-react";
import EmojiPicker from "emoji-picker-react";
import { useState } from "react";

export default function ChatInput() {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [input, setInput] = useState("");
  const onToggleShowEmojiPicker = () => {
    setShowEmojiPicker((prev) => !prev);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const message = formData.get("message");
    alert(message);
  };

  // Implement convex
  return (
    <form
      onSubmit={onSubmit}
      className="flex items-center bg-gray-100 gap-1 absolute rounded-md bottom-0 left-0 right-0 mx-0 md:mx-auto w-auto max-w-[950px] mb-0 md:mb-4 px-2 translate-y-1 md:translate-y-0"
    >
      <textarea
        autoFocus
        className="border max-h-[900px] rounded-md p-1 bg-gray-100  w-full outline-none border-none resize-none"
        placeholder="Type "
        name="message"
        onChange={(e) => {
          setInput(e.target.value);
        }}
        value={input}
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
              <EmojiPicker
                onEmojiClick={(val) => {
                  if (input.trim().length === 0) {
                    return setInput(val.emoji);
                  }
                  return setInput((prev) => prev.concat(val.emoji));
                }}
              />
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
