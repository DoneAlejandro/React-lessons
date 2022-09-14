import React, { useMemo, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import { colorModeContext, ToggleColorButton } from "./ToggleColorButton";

export function ToggleColorMode() {
  const [mode, setMode] = useState<"light" | "dark">("light");
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );
  return (
    <colorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <ToggleColorButton />
      </ThemeProvider>
    </colorModeContext.Provider>
  );
}
