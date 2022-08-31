import React from "react";
import { Message } from "../Message/Message";
import style from "./FormMessage.module.css";

// Функциональный компонент

export const FormMessage = () => {
  return (
    <div className={style.wrapper}>
      <Message />
    </div>
  );
};
