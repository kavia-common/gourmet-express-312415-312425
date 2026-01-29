import React, { createContext, useMemo } from "react";

/**
 * A minimal ThemeProvider. We use CSS variables as the real source of truth
 * (defined in App.css), and provide a context in case components need to
 * read the theme name later.
 */
export const ThemeContext = createContext({ theme: "light" });

// PUBLIC_INTERFACE
export function ThemeProvider({ children }) {
  /** Minimal theme provider that standardizes app theme (CSS variables). */
  const value = useMemo(() => ({ theme: "light" }), []);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
