import React, { FC, useState } from "react";
import { ListItem } from "@mui/material";
import { nanoid } from "nanoid";
import style from "./ChatList.module.css";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addChat, deleteChat } from "src/store/messages/actions";
import { selectorChats } from "src/store/messages/selectors";

export const ChatList: FC = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const chats = useSelector(
    selectorChats,
    (prev, next) => prev.length === next.length
  );

  const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    if (value) {
      dispatch(addChat(value));
      setValue("");
    }
  };

  return (
    <>
      <ul>
        {chats.map((chatItem) => (
          <ListItem key={chatItem.id} data-testid="list">
            <NavLink
              to={`/chats/${chatItem.name}`}
              className={({ isActive }) =>
                isActive ? style.active : style.notActive
              }
            >
              {chatItem.name}
            </NavLink>
            <button onClick={() => dispatch(deleteChat(chatItem.name))}>
              Удалить чат
            </button>
          </ListItem>
        ))}
      </ul>
      <form onSubmit={handleSubmit} className={style.form}>
        <input
          value={value}
          onChange={(ev) => setValue(ev.target.value)}
          className={style.input}
        />
        <button className={style.btn}>Создать чат</button>
      </form>
    </>
  );
};
