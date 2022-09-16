import React, { FC, useCallback } from "react";
import { useState } from "react";
import style from "./FormMessage.module.css";
import { TextField, Button } from "@mui/material";
import { AUTHOR, Message } from "src/types";

// Функциональный компонент

interface FormMessageProps {
  addMessage: (newMessage: Message) => void;
}

export const FormMessage: FC<FormMessageProps> = ({ addMessage }) => {
  const [author, setAuthor] = useState("");
  const [text, setText] = useState("");

  const handlerSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const messageItem = {
      author: author,
      message: text,
      customers: AUTHOR.USER,
    };
    addMessage(messageItem);
    setAuthor("");
    setText("");
  };
  // запутался я уже с этим рефом
  // если использовать useCallback, то автофокус работает только при первом рендере
  // после отправки формы фокус не работате
  // если использовать закомментированную конструкцию, афтофокус работает
  // но с такой конструкцией не даёт вводить во 2 инпут более одного символа
  const callbackRef = useCallback((inputElement: { focus: () => void }) => {
    if (inputElement) {
      inputElement.focus();
    }
  }, []);

  return (
    <div>
      <form className={style.formMessage} onSubmit={handlerSubmit}>
        <TextField
          label="Name"
          inputRef={callbackRef}
          //   inputRef={(input) => input?.focus()}
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          inputProps={{ "data-testid": "inputName" }}
        />

        <TextField
          label="Your message"
          value={text}
          placeholder="Введите сообщение"
          onChange={(e) => setText(e.target.value)}
          inputProps={{ "data-testid": "inputMessage" }}
        />
        <Button
          type="submit"
          variant="contained"
          color="success"
          disabled={!author || !text}
          data-testid="button"
        >
          Отправить сообщение
        </Button>
      </form>
    </div>
  );
};

// в задании говорится про автофокус когда пользователь открывает приложение и когда отправляет сообщение,
// autoFocus работает только при открытии приложения, но не работает в случае отправки, пробовал с хуком,
// но он с компонентом material ui не работает, в общем тут не понял как реализовать этот момент

// const Form = () => {
//   const nameInput = useCallback((inputElement) => {
//     if (inputElement) {
//       inputElement.focus();
//     }
//   }, []);
//   return <input ref={nameInput} />;
// };
