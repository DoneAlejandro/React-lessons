import React, { FC } from "react";
import { Chats } from "src/types";
import { List, ListItem } from "@mui/material";

interface ChatProps {
  chats: Chats;
}

export const ChatList: FC<ChatProps> = ({ chats }) => {
  return (
    <List>
      {chats.map((chatItem) => (
        <ListItem key={chatItem.id} data-testid="list">
          {chatItem.name}
        </ListItem>
      ))}
    </List>
  );
};
