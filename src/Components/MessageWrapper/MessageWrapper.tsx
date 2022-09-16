import React, { FC, useCallback } from "react";
import { useState, useEffect } from "react";
import style from "./MessageWrapper.module.css";
import { MessagesList } from "./MessagesList";
import { FormMessage } from "./FormMessage";
import { AUTHOR, Message, Messages } from "src/types";

// Функциональный компонент

export const MessageWrapper: FC = () => {
  const [countMessage, setCountMessage] = useState(0);
  const [messages, setMessages] = useState<Messages>([]);

  //   Добавление сообщения
  const addMessage = useCallback((newMessage: Message) => {
    setMessages((prevMessage) => [...prevMessage, newMessage]);
    setCountMessage((prevCount) => prevCount + 1);
  }, []);

  //   Ответ на отправленное сообщение
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (
        messages.length > 0 &&
        messages[messages.length - 1].customers === AUTHOR.USER
      ) {
        addMessage({
          author: AUTHOR.BOT,
          message: new Date().toLocaleTimeString(),
          customers: AUTHOR.BOT,
        });
      }
    }, 1500);
    return () => clearInterval(timeout);
  }, [messages, addMessage]);

  return (
    <div>
      <div className={style.title}>
        <h3>Всего сообщений: {countMessage}</h3>
      </div>
      <FormMessage addMessage={addMessage} />
      <MessagesList messages={messages} />
    </div>
  );
};
