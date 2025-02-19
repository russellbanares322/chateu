import ChatLayout from "../_layout/chat-layout";

type ChatProps = {
  params: Promise<{
    chatId: string;
  }>;
};

// Map real data
export default async function Chat({ params }: ChatProps) {
  const { chatId } = await params;
  return <ChatLayout>Chat: {chatId}</ChatLayout>;
}
