import { Button } from "@/components/ui/button";
import ChatLayout from "../_layout/chat-layout";
import { SendIcon } from "lucide-react";

type ChatProps = {
  params: Promise<{
    chatId: string;
  }>;
};

const dummyChatData = Array.from({});
// Map real data
export default async function Chat({ params }: ChatProps) {
  const { chatId } = await params;
  return (
    <ChatLayout>
      <div className="flex gap-2 items-center justify-center">
        <div className="relative flex flex-col p-2 border border-solid w-[1000px] h-[700px] rounded-md">
          {chatId}
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
        </div>
      </div>
    </ChatLayout>
  );
}
