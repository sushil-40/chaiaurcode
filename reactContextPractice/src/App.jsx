import { useEffect, useState } from "react";

import "./App.css";
import Button from "./components/Button/Button";
import { ThemeContextProvider } from "./context/themContext";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => {
    setThemeMode("light");
  };

  const darkTheme = () => {
    setThemeMode("dark");
  };

  useEffect(() => {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeContextProvider value={{ themeMode, darkTheme, lightTheme }}>
      <Button />
    </ThemeContextProvider>
  );
}

export default App;
