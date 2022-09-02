import React from "react";
import { MessagesList } from "../MessagesList/MessagesList";
import style from "./FormMessage.module.css";

// Функциональный компонент

export const FormMessage = ({
  addMessage,
  messages,
  author,
  text,
  onChangeHandlerAuthorValue,
  onChangeHandlerTextValue,
}) => {
//   debugger;
  return (
    <div className={style.wrapper}>
      <form className={style.formMessage}>
        <input
          className={style.input}
          value={author.author}
          placeholder="Введите имя"
          onChange={onChangeHandlerAuthorValue}
        />
        <input
          className={style.input}
          value={text.text}
          placeholder="Введите сообщение"
          onChange={onChangeHandlerTextValue}
        />
        <button
          className={style.btn}
          onClick={addMessage}
          //   disabled={!author.author || !text.text}
        >
          Отправить сообщение
        </button>
      </form>
      <MessagesList messages={messages} />
    </div>
  );
};
