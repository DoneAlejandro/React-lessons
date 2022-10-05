import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import { ChatList } from "src/components/ChatList";
import { FormMessage } from "src/components/FormMessage";
import { MessagesList } from "src/components/MessagesList";
import { addMessage } from "src/store/messages/actions";
import { selectorMessage } from "src/store/messages/selectors";
import { AUTHOR } from "src/types";
import style from "./ChatPage.module.css";

export const ChatPage: FC = () => {
  const messages = useSelector(selectorMessage);
  const { chatId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (
      chatId &&
      messages[chatId]?.length > 0 &&
      messages[chatId][messages[chatId].length - 1].customers === AUTHOR.USER
    ) {
      const timeout = setTimeout(() => {
        dispatch(
          addMessage(chatId, {
            author: AUTHOR.BOT,
            message: new Date().toLocaleTimeString(),
            customers: AUTHOR.BOT,
          })
        );
      }, 1500);
      return () => clearInterval(timeout);
    }
  }, [chatId, messages, dispatch]);
  if (chatId && !messages[chatId]) {
    return <Navigate to="/chats" replace />;
  }

  return (
    <div className={style.wrapper}>
      <ChatList />
      <MessagesList messages={chatId ? messages[chatId] : []} />
      <FormMessage />
    </div>
  );
};
