import React, { FC } from "react";
// import { ChatList } from "src/components/ChatList";
import { Chats } from "src/types";

interface ChatPageProps {
  chats: Chats;
  addChat: (newChat: Chats) => void;
}
// { chats, addChat }
export const ChatPage: FC<ChatPageProps> = () => {
  return <div>{/* <ChatList chats={chats} addChat={addChat} /> */}</div>;
};
