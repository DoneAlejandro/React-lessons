import React, { FC } from "react";
import { Message } from "src/types";

interface MessageProps {
  messages: Message[];
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
