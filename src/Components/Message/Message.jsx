import React from "react";
import { useState, useEffect } from "react";
import style from "./Message.module.css";
// import { MessagesList } from "../MessagesList/MessagesList";
import { FormMessage } from "../FormMessage/FormMessage";

// Функциональный компонент

export const Message = () => {
  const [countMessage, setCountMessage] = useState(0);
  const [author, setAuthor] = useState("");
  const [text, setText] = useState("");
  const [messages, setMessages] = useState([]);

  const addMessage = () => {
    let messageItem = { author: author, message: text };
    setMessages([...messages, messageItem]);
    setCountMessage(countMessage + 1);
    setAuthor("");
    setText("");
  };
//   useEffect(() => {
//     const timeout = setTimeout(() => {
//       if (messages.length > 0) {
//         alert("Сообщение доставлено!");
//       }
//     }, 1500);
//     return () => clearInterval(timeout);
//   }, [messages]);

  const onChangeHandlerAuthorValue = (e) => {
    setAuthor(e.target.value);
  };
  const onChangeHandlerTextValue = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <div className={style.title}>
        <h3>Всего сообщений: {countMessage}</h3>
      </div>
      <FormMessage
        addMessage={addMessage}
        messages={messages}
        author={author}
        text={text}
        onChangeHandlerAuthorValue={onChangeHandlerAuthorValue}
        onChangeHandlerTextValue={onChangeHandlerTextValue}
      />
      {/* <MessagesList messages={messages} /> */}
    </>
  );
};
