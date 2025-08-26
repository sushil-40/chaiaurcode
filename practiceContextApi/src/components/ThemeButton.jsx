import React from "react";
import useTheme from "./context/themeContext";

const ThemeButton = () => {
  const { themeMode, lightTheme, darkTheme } = useTheme();
  const onChangeBtn = (e) => {
    const darkModeStatus = e.currentTarget.checked;
    if (darkModeStatus) {
      darkTheme();
    } else {
      lightTheme();
    }
  };

  return (
    <div>
      <input
        type="checkbox"
        onChange={onChangeBtn}
        checked={themeMode === "dark"}
      />
    </div>
  );
};

export default ThemeButton;
