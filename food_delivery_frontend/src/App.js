import React from "react";
import "./App.css";
import { ThemeProvider } from "./theme/ThemeProvider";
import AppRouter from "./router/AppRouter";

// PUBLIC_INTERFACE
function App() {
  /** Application root: theme + router. */
  return (
    <ThemeProvider>
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
