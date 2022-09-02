import React from "react";

export const MessagesList = ({ messages }) => {
  return (
    <ul>
      {messages.map((message, index) => (
        <li key={index}>
          Cообщение от: {message.author} <br />
          Текст сообщения: {message.message}
        </li>
      ))}
    </ul>
  );
};
