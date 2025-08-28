import React, { useState } from "react";
import { useTodo } from "../context/todoContextApi";

const TodoItem = ({ todo }) => {
  const [task, setTask] = useState(todo.todo);
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const { updateTodo, deleteTodo, toggleComplete } = useTodo();

  //   const editTodo = () => {
  //     updateTodo(todo.id, { ...todo, todo: todoMessage });
  //     setIsTodoEditable(false);
  //   };

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todo: todo });
    setIsTodoEditable(false);
  };

  //     const toggleCompleted = () => {
  //     toggleComplete(todo.id);
  //   };
  const toggleCompleted = () => {
    toggleComplete(todo.id);
  };
  return (
    <div className={todo.completed ? "greenBg" : ""}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={toggleCompleted}
      />
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        readOnly={!isTodoEditable}
      />{" "}
      <button
        onClick={() => {
          if (todo.completed) return;
          if (isTodoEditable) {
            editTodo();
          } else {
            setIsTodoEditable((prev) => !prev);
          }
        }}
        disabled={todo.completed}
      >
        {isTodoEditable ? "📁" : "✏️"}
      </button>{" "}
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </div>
  );
};

export default TodoItem;
