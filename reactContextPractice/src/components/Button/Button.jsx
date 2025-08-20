import React from "react";
import { Form } from "react-bootstrap";
import useTheme from "../../context/themContext";

const Button = () => {
  const { themeMode, lightTheme, darkTheme } = useTheme();
  const handleOnChange = (e) => {
    const darkModeStatus = e.currentTarget.checked;
    if (darkModeStatus) {
      darkTheme();
    } else {
      lightTheme();
    }
  };
  return (
    <Form>
      <Form.Check
        type="switch"
        label="toggle"
        checked={themeMode === "dark"}
        onChange={handleOnChange}
      ></Form.Check>
    </Form>
  );
};

export default Button;
