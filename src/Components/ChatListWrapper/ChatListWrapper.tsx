import React, { useState } from "react";
import { ChatList } from "./ChatList";
import { Chats } from "src/types";

export const ChatListWrapper = () => {
  const chatsItem = [
    { id: "1", name: "Чат 1" },
    { id: "2", name: "Чат 2" },
    { id: "3", name: "Чат 3" },
  ];
  const [chats] = useState<Chats>(chatsItem);
  return (
    <div>
      <ChatList chats={chats} />
    </div>
  );
};
