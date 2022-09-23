import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { ChatList } from "./components/ChatList";
import { Header } from "./components/Header";
// import { ChatPage } from "./components/pages/ChatPage";
import { MainPage } from "./components/pages/MainPage";
import { ProfilePage } from "./components/pages/ProfilePage";
import { AUTHOR, Chat, Message, Messages } from "./types";

const defaultChats: Chat[] = [
  {
    id: "1",
    name: "чат 1",
  },
  {
    id: "2",
    name: "чат 2",
  },
];

const defaultMessage: Messages = {
  "1": [{ author: "Алексей", message: "Привет!", customers: AUTHOR.USER }],
  "2": [{ author: "Петя", message: "Всем привет", customers: AUTHOR.USER }],
};

export function App() {
  const [chats, setChats] = useState<Chat[]>(defaultChats);
  const [messages, setMessages] = useState<Messages>(defaultMessage);

  const addChat = (newChat: Chat) => {
    setChats([...chats, newChat]);
    setMessages({ ...messages, [newChat.id]: [] });
  };

  const addMessage = (chatId: string, newMessage: Message) => {
    setMessages({ ...messages, [chatId]: [...messages[chatId], newMessage] });
  };
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<MainPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="chats">
          <Route index element={<ChatList chats={chats} addChat={addChat} />} />
          {/* <Route
            path=":chatId"
            element={<ChatPage chats={chats} addChat={addChat} />}
          /> */}
        </Route>
      </Route>
    </Routes>
  );
}
