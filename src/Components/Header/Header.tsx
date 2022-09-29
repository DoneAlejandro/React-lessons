import React, { FC } from "react";
import { NavLink, Outlet } from "react-router-dom";
import style from "./Header.module.css";

const navigation = [
  {
    name: "Main",
    path: "/",
  },
  {
    name: "Chats",
    path: "/chats",
  },
  {
    name: "Profile",
    path: "/profile",
  },
];

export const Header: FC = () => {
  return (
    <>
      <header className={style.header}>
        <ul className={style.navList}>
          {navigation.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive ? style.active : style.notActive
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
