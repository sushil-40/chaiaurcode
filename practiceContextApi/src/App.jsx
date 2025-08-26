import { useEffect, useState } from "react";
import "./App.css";
import { ThemeProvider } from "./components/context/themeContext";
import UserContextProvider from "./components/context/UserContextProvider";
import Dashboard from "./components/Dashboard";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => {
    setThemeMode("light");
  };

  const darkTheme = () => {
    setThemeMode("dark");
  };

  // actual change in theme

  useEffect(() => {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <Dashboard />
    </ThemeProvider>
  );
}

export default App;
