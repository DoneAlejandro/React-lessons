import React from "react";
import { useState, useEffect } from "react";
import style from "./Message.module.css";
import { MessagesList } from "../MessagesList/MessagesList";
import { FormMessage } from "../FormMessage/FormMessage";

// Функциональный компонент

export const Message = () => {
  const [countMessage, setCountMessage] = useState(0);
  const [messages, setMessages] = useState([]);
  const addMessage = (newMessage) => {
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
