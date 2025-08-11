import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const handleOnIncrement = () => {
    setCount((prevCounter) => prevCounter + 1);
    // setCount((prevCounter) => prevCounter + 1);
    // setCount(count + 1);
    // setCount((prevCounter) => prevCounter + 5);

    // setCount((prevCounter) => prevCounter + 1);
    // setCount((prevCounter) => prevCounter + 1);

    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
  };
  const handleOnDecrement = () => {
    setCount(count - 1);
  };
  return (
    <>
      <h3>Counter App!</h3>
      <h4>{count}</h4>
      <button onClick={handleOnIncrement}>Increment</button>
      <span> </span>
      <button onClick={handleOnDecrement}>Decrement</button>
    </>
  );
}

export default App;
