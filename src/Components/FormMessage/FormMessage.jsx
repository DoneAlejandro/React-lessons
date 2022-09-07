import React from "react";
import { useState } from "react";
import style from "./FormMessage.module.css";

// Функциональный компонент

export const FormMessage = ({ addMessage }) => {
  const [author, setAuthor] = useState("");
  const [text, setText] = useState("");

  const handlerSubmit = (ev) => {
    ev.preventDefault();
    let messageItem = { author: author, message: text };
    addMessage(messageItem);
    setAuthor("");
    setText("");
  };
  return (
    <div>
      <form className={style.formMessage} onSubmit={handlerSubmit}>
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
        <button
          className={style.btn}
          onClick={() => addMessage}
          disabled={!author || !text}
        >
          Отправить сообщение
        </button>
      </form>
    </div>
  );
};
