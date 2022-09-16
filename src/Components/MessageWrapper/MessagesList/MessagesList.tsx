import React, { FC } from "react";
import { Messages } from "src/types";

interface MessageProps {
  messages: Messages;
}

export const MessagesList: FC<MessageProps> = ({ messages }) => {
  return (
    <ul>
      {messages.map((message, index) => (
        <li key={index} data-testid="li">
          Cообщение от: {message.author} <br />
          Текст сообщения: {message.message}
        </li>
      ))}
    </ul>
  );
};
