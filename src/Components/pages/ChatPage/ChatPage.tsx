import React, { FC } from "react";
import { ChatList } from "src/components/ChatList";
import { MessageWrapper } from "../../MessageWrapper";
import { Chats } from "src/types";

interface ChatPageProps {
  chats: Chats;
  addChat: (newChat: Chats) => void;
}

export const ChatPage: FC<ChatPageProps> = ({ chats, addChat }) => {
  return (
    <div>
      <ChatList chats={chats} addChat={addChat} />
      <MessageWrapper />
    </div>
  );
};
