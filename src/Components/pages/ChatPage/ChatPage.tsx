import React, { FC, useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import { ChatList } from "src/components/ChatList";
import { FormMessage } from "src/components/FormMessage";
import { MessagesList } from "src/components/MessagesList";
import { AUTHOR, Chat, Message, Messages } from "src/types";
import style from "./ChatPage.module.css";

interface ChatPageProps {
  chats: Chat[];
  addChat: (chat: Chat) => void;
  messages: Messages;
  addMessage: (chatId: string, newMessage: Message) => void;
  deleteChat: (chatId: string) => void;
}

export const ChatPage: FC<ChatPageProps> = ({
  chats,
  addChat,
  messages,
  addMessage,
  deleteChat,
}) => {
  const { chatId } = useParams();
  useEffect(() => {
    if (
      chatId &&
      messages[chatId]?.length > 0 &&
      messages[chatId][messages[chatId].length - 1].customers === AUTHOR.USER
    ) {
      const timeout = setTimeout(() => {
        addMessage(chatId, {
          author: AUTHOR.BOT,
          message: new Date().toLocaleTimeString(),
          customers: AUTHOR.BOT,
        });
      }, 1500);
      return () => clearInterval(timeout);
    }
  }, [chatId, messages, addMessage]);
  if (chatId && !messages[chatId]) {
    return <Navigate to="/chats" replace />;
  }

  return (
    <div className={style.wrapper}>
      <ChatList chats={chats} addChat={addChat} deleteChat={deleteChat} />
      <MessagesList messages={chatId ? messages[chatId] : []} />
      <FormMessage addMessage={addMessage} />
    </div>
  );
};
