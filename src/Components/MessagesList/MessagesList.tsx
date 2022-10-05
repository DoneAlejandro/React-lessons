import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { deleteMessage } from "src/store/messages/actions";
import { Message } from "src/types";

interface MessageProps {
  messages: Message[];
}

export const MessagesList: FC<MessageProps> = ({ messages }) => {
  const dispatch = useDispatch();
  return (
    <ul>
      {messages.map((message, index) => (
        <li key={index} data-testid="li">
          Cообщение от: {message.author} <br />
          Текст сообщения: {message.message}
          <button
            onClick={() => dispatch(deleteMessage(message.message, message))}
          >
            X
          </button>
        </li>
      ))}
    </ul>
  );
};
