import React, { useState } from "react";
import { useTodo } from "../context/todoContextApi";

const TodoForm = () => {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();
  const handleAddTodo = (e) => {
    e.preventDefault();
    if (!todo) return;
    addTodo({
      todo,
      completed: false,
    });
    setTodo("");
  };

  return (
    <div>
      <h2>Add Todo Item</h2>
      <form onSubmit={handleAddTodo}>
        <input
          type="text"
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
          placeholder="enter todo"
        />{" "}
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default TodoForm;
