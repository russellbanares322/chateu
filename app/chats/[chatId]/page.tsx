import ChatLayout from "../_layout/chat-layout";

type ChatProps = {
  params: {
    chatId: string;
  };
};
export default async function Chat({ params }: ChatProps) {
  return <ChatLayout>Chat: {params.chatId}</ChatLayout>;
}
