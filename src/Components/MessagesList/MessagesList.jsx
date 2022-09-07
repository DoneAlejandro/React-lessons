import React from "react";

export const MessagesList = ({ messages = ["sda", "asdas"] }) => {
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
