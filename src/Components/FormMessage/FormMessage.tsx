import React, { FC, useCallback } from "react";
import { useState } from "react";
import style from "./FormMessage.module.css";
import { TextField, Button } from "@mui/material";
import { AUTHOR } from "src/types";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addMessage } from "src/store/messages/actions";

// Функциональный компонент

export const FormMessage: FC = () => {
  const [author, setAuthor] = useState("");
  const [text, setText] = useState("");
  const { chatId } = useParams();
  const dispatch = useDispatch();

  const handlerSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const messageItem = {
      author: author,
      message: text,
      customers: AUTHOR.USER,
    };
    if (chatId) {
      dispatch(addMessage(chatId, messageItem));
      setAuthor("");
      setText("");
    }
  };

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
