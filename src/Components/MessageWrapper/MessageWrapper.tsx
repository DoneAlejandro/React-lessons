import React, { FC } from "react";
import { useState, useEffect } from "react";
import style from "./MessageWrapper.module.css";
import { MessagesList } from "../MessagesList";
import { FormMessage } from "../FormMessage";
import { Message, Messages } from "src/types";
import { ThemeContext } from "../ToggleTheme/ThemeContext";
import { ToggleTheme } from "../ToggleTheme";

// Функциональный компонент

export const MessageWrapper: FC = () => {
  const [countMessage, setCountMessage] = useState(0);
  const [messages, setMessages] = useState<Messages>([]);
  const [mode, setMode] = useState<"light" | "dark">("light");

  //   Добавление сообщения
  const addMessage = (newMessage: Message) => {
    setMessages([...messages, newMessage]);
    setCountMessage(countMessage + 1);
  };

  //   Ответ на отправленное сообщение
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (messages.length > 0) {
        alert("Сообщение доставлено!");
      }
    }, 1500);
    return () => clearInterval(timeout);
  }, [messages]);

  //   Тема
  const toggleColorMode = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ mode, toggleColorMode }}>
      <div className={mode ? style.lightMode : style.darkMode}>
        <div className={style.wrapper}>
          <ToggleTheme />
          <div className={style.title}>
            <h3>Всего сообщений: {countMessage}</h3>
          </div>
          <FormMessage addMessage={addMessage} />
          <MessagesList messages={messages} />
        </div>
      </div>
    </ThemeContext.Provider>
  );
};
