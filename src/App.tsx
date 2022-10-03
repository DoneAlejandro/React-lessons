import { nanoid } from "nanoid";
import React, { useState, useMemo } from "react";
import { Provider } from "react-redux";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { ChatList } from "./components/ChatList";
import { Header } from "./components/Header";
import { ChatPage } from "./components/pages/ChatPage";
import { ProfilePage } from "./components/pages/ProfilePage";
import { ToggleColorMode } from "./components/ToggleColorMode";
import { store } from "./store";
import { AUTHOR, Chat, Message, Messages } from "./types";

export function App() {
  const [messages, setMessages] = useState<Messages>([]);

  const addMessage = (chatId: string, newMessage: Message) => {
    setMessages({ ...messages, [chatId]: [...messages[chatId], newMessage] });
  };

  const deleteChat = (chatId: string) => {
    const newMessage = { ...messages };
    delete newMessage[chatId];
    setMessages(newMessage);
  };

  const chats = useMemo(
    () =>
      Object.keys(messages).map((chatName) => ({
        name: chatName,
        id: nanoid(),
      })),
    [Object.keys(messages).length]
  );

  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<ToggleColorMode />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="chats">
            <Route
              index
              element={
                <ChatList
                  chats={chats}
                  addChat={addChat}
                  deleteChat={deleteChat}
                />
              }
            />
            <Route
              path=":chatId"
              element={
                <ChatPage
                  chats={chats}
                  addChat={addChat}
                  messages={messages}
                  addMessage={addMessage}
                  deleteChat={deleteChat}
                />
              }
            />
          </Route>
        </Route>
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </Provider>
  );
}
