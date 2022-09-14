import React, { createContext, useContext } from "react";
import { Box, Button, useTheme } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { MessageWrapper } from "../../MessageWrapper";
import style from "./ToggleColorButton.module.css";
import { ChatListWrapper } from "../../ChatListWrapper";

// ИЗМЕНЕНИЕ ТЕМЫ
// eslint-disable-next-line @typescript-eslint/no-empty-function
export const colorModeContext = createContext({ toggleColorMode: () => {} });

export const ToggleColorButton = () => {
  //   ХУК USETHEME И USECONTEXT ДЛЯ ТЕМЫ
  const theme = useTheme();
  const colorMode = useContext(colorModeContext);
  return (
    <div
      // Через css свойство не работало, добавил так
      style={{ justifyContent: "space-around" }}
      className={
        theme.palette.mode === "light" ? style.wrapperLight : style.wrapperDark
      }
    >
      <ChatListWrapper />
      <div className={style.box}>
        <MessageWrapper />
        <Button
          data-testid="button"
          variant="contained"
          onClick={colorMode.toggleColorMode}
        >
          {theme.palette.mode === "dark" ? "светлая тема" : "тёмная тема"}
          {theme.palette.mode === "dark" ? (
            <Brightness7Icon />
          ) : (
            <Brightness4Icon />
          )}
        </Button>
      </div>
    </div>
  );
};
