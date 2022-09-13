import React, { createContext } from "react";

interface ThemeContext {
  mode: "light" | "dark";
  toggleColorMode?: () => void;
}

const defaultContext: ThemeContext = {
  mode: "dark",
};

export const ThemeContext = createContext(defaultContext);
