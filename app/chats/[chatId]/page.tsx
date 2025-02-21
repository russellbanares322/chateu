import ChatLayout from "../_layout/chat-layout";

type ChatProps = {
  params: Promise<{
    chatId: string;
  }>;
};

// Map real data
export default async function Chat({ params }: ChatProps) {
  const { chatId } = await params;
  return (
    <ChatLayout>
      <div className="flex flex-col gap-2 items-center justify-center">
        <div className="bg-slate-300 w-[1000px] h-[700px] rounded-md">
          {chatId}
        </div>
        <textarea
          className="border w-[1000px] rounded-md focus:outline-blue-500"
          placeholder="Enter your chat here..."
        />
      </div>
    </ChatLayout>
  );
}
