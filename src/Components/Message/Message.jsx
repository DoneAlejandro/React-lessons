import React from "react";
import style from "./Message.module.css";
import { useState, useEffect } from "react";

// Функциональный компонент

export const Message = () => {
  const [author, setAuthor] = useState("");
  const [text, setText] = useState("");
  const [messagesList, setMessagesList] = useState([]);
  const [countMessage, setCountMessage] = useState(0);

  const addMessage = () => {
    let messageItem = { author: author, message: text };
    setMessagesList([...messagesList, messageItem]);
    setCountMessage(countMessage + 1);
    setAuthor("");
    setText("");
  };

  useEffect(() => {
    setTimeout(() => {
      if (messagesList.length > 0) {
        alert("Сообщение доставлено!");
      }
    }, 1500);
  }, [messagesList]);

  const messages = messagesList.map((message, index) => {
    return (
      <li key={index}>
        Cообщение от: {message.author} <br />
        Текст сообщения: {message.message}
      </li>
    );
  });
  return (
    <>
      {/* Можно было вывести в отдельную компоненту, но я не успеваю, позже исправлю */}
      <div className={style.title}>
        <h3>Всего сообщений: {countMessage}</h3>
      </div>
      <div className={style.formMessage}>
        <input
          className={style.input}
          value={author}
          placeholder="Введите имя"
          onChange={(e) => setAuthor(e.target.value)}
        />
        <input
          className={style.input}
          value={text}
          placeholder="Введите сообщение"
          onChange={(e) => setText(e.target.value)}
        />
        <button className={style.btn} onClick={addMessage}>
          Отправить сообщение
        </button>
      </div>
      <div>
        <ul>{messages}</ul>
      </div>
    </>
  );
};
