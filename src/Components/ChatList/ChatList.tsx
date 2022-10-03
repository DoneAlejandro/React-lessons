import React, { FC, useState } from "react";
import { Chat } from "src/types";
import { ListItem } from "@mui/material";
import { nanoid } from "nanoid";
import style from "./ChatList.module.css";
import { NavLink } from "react-router-dom";

interface ChatListProps {
  chats: Chat[];
  addChat: (chat: Chat) => void;
  deleteChat: (chatId: string) => void;
}

export const ChatList: FC<ChatListProps> = ({ chats, addChat, deleteChat }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    if (value) {
      addChat({
        id: nanoid(),
        name: value,
      });
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
            <button onClick={() => deleteChat(chatItem.name)}>
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
