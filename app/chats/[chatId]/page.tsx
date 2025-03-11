import ChatLayout from "../_layout/chat-layout";
import ChatDisplay from "./_layout/chat-display";
import ChatInput from "./_layout/chat-input";

type ChatProps = {
  params: Promise<{
    chatId: string;
  }>;
};

// Map real data
export default async function Chat({ params }: ChatProps) {
  const { chatId } = await params;
  console.log(chatId);

  return (
    <ChatLayout>
      <div className="flex gap-2 items-center justify-center overflow-y-hidden">
        <div className="relative flex flex-col p-2 border border-solid w-[1000px] h-[720px] rounded-md">
          <ChatDisplay chatId={chatId} />
          <ChatInput />
        </div>
      </div>
    </ChatLayout>
  );
}
