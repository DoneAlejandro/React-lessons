import React, { FC, useState } from "react";
import { Chat } from "src/types";
import { List, ListItem } from "@mui/material";
import { nanoid } from "nanoid";
import style from "./ChatList.module.css";

interface ChatListProps {
  chats: Chat[];
  addChat: (chat: Chat) => void;
}

export const ChatList: FC<ChatListProps> = ({ chats, addChat }) => {
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
    <div>
      <List>
        {chats.map((chatItem) => (
          <ListItem key={chatItem.id} data-testid="list">
            {chatItem.name}
          </ListItem>
        ))}
      </List>
      <form onSubmit={handleSubmit} className={style.form}>
        <input
          value={value}
          onChange={(ev) => setValue(ev.target.value)}
          className={style.input}
        />
        <button className={style.btn}>Создать чат</button>
      </form>
    </div>
  );
};
// import React, { FC, useState } from "react";
// import { Chat, Chats } from "src/types";
// import { ChatList } from "./ChatList";
// import style from "./ChatListWrapper.module.css";
// import { nanoid } from "nanoid";

// interface ChatListProps {
//   addChats: (newChat: Chat) => void;
//   chats: Chats;
// }

// export const ChatListWrapper: FC<ChatListProps> = ({ addChats, chats }) => {
//   const [value, setValue] = useState("");

//   const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
//     ev.preventDefault();
//     addChats({
//       id: nanoid(),
//       name: value,
//     });
//     setValue("");
//   };
//   return (
//     <div>
//       <ChatList chats={chats} />
//       <form onSubmit={handleSubmit} className={style.form}>
//         <input
//           value={value}
//           onChange={(ev) => setValue(ev.target.value)}
//           className={style.input}
//         />
//         <button className={style.btn}>Создать чат</button>
//       </form>
//     </div>
//   );
// };
