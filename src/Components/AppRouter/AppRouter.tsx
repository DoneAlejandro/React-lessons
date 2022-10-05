import React, { FC } from "react";
import { Routes, Route } from "react-router-dom";
import { ChatList } from "../ChatList";
import { Header } from "../Header";
import { ChatPage } from "../pages/ChatPage";
import { ProfilePage } from "../pages/ProfilePage";
import { ToggleColorMode } from "../ToggleColorMode";

export const AppRouter: FC = () => {
  return (
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
  );
};
