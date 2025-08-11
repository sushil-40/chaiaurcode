import { useState } from "react";

import "./App.css";

function App() {
  const [color, setColor] = useState("olive");
  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-4xl">
            <button
              className="outline-none px-4 py-1 rounded-full shadow-lg"
              style={{ backgroundColor: "red" }}
              onClick={() => setColor("red")}
            >
              red
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full shadow-lg"
              style={{ backgroundColor: "green" }}
              onClick={() => setColor("green")}
            >
              green
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full shadow-lg"
              style={{ backgroundColor: "blue" }}
              onClick={() => setColor("blue")}
            >
              blue
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full shadow-lg"
              style={{ backgroundColor: "olive" }}
              onClick={() => setColor("olive")}
            >
              olive
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
