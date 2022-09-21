import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
import { MainPage } from "./components/pages/MainPage";
import { ProfilePage } from "./components/pages/ProfilePage";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<MainPage />} />
        <Route path="profile" element={<ProfilePage />} />
		<Route
      </Route>
    </Routes>
  );
}
