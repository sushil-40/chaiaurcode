import { useEffect, useState } from "react";
import "./App.css";
import { ThemeProvider } from "./contexts/theme";
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";

function App() {
  const [themeMode, setThemeMode] = useState("light");
  const lightTheme = () => {
    setThemeMode("light");
  };
  const darkTheme = () => {
    setThemeMode("dark");
  };
  //actual change in theme

  useEffect(() => {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      {" "}
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4"></div>
          {/* themeBtn  */}
          <ThemeBtn />
          <div className="w-full max-w-sm mx-auto"></div>
          {/* cardBtn */}
          <Card />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
