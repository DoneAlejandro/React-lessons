import { Button } from "@mui/material";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import LightModeIcon from "@mui/icons-material/LightMode";
import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export const ToggleTheme = () => {
  const { mode, toggleColorMode } = useContext(ThemeContext);
  return (
    <div>
      <Button variant="contained" onClick={toggleColorMode}>
        Изменить тему {mode === "light" ? <LightModeIcon /> : <ModeNightIcon />}
      </Button>
    </div>
  );
};
