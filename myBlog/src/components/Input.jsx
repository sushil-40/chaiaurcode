import React, { useId, useRef } from "react";

const Input = ({ label, type = "text", className = "", ...props }, ref) => {
  const inputRef = useRef();
  const id = useId();
  return (
    <div className="w-full">
      {label && (
        <label className="inline-block mb-1" htmlFor={id}>
          {label}
        </label>
      )}
      <input
        type={type}
        className={`${className}`}
        ref={inputRef}
        {...props}
        id={id}
      />
    </div>
  );
};

export default Input;

// import { useRef } from 'react'
// const Input = (props, ref) => <input {...props} ref={ref} />
// export default function App() {
//   const inputRef = useRef()
//   return <Input ref={inputRef} />
// }
