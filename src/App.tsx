import React from "react";
import { Provider } from "react-redux";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { ChatList } from "./components/ChatList";
import { Header } from "./components/Header";
import { ChatPage } from "./components/pages/ChatPage";
import { ProfilePage } from "./components/pages/ProfilePage";
import { ToggleColorMode } from "./components/ToggleColorMode";
import { store } from "./store";

export function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<ToggleColorMode />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="chats">
            <Route index element={<ChatList />} />
            <Route path=":chatId" element={<ChatPage />} />
          </Route>
        </Route>
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </Provider>
  );
}
