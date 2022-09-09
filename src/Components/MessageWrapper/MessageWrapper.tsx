import React, { FC } from "react";
import { useState, useEffect } from "react";
import style from "./MessageWrapper.module.css";
import { MessagesList } from "../MessagesList";
import { FormMessage } from "../FormMessage";
import { Message, Messages } from "src/types";

// Функциональный компонент

export const MessageWrapper: FC = () => {
  const [countMessage, setCountMessage] = useState(0);
  const [messages, setMessages] = useState<Messages>([]);

  const addMessage = (newMessage: Message) => {
    setMessages([...messages, newMessage]);
    setCountMessage(countMessage + 1);
  };
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (messages.length > 0) {
        alert("Сообщение доставлено!");
      }
    }, 1500);
    return () => clearInterval(timeout);
  }, [messages]);

  return (
    <div className={style.wrapper}>
      <div className={style.title}>
        <h3>Всего сообщений: {countMessage}</h3>
      </div>
      <FormMessage addMessage={addMessage} />
      <MessagesList messages={messages} />
    </div>
  );
};
