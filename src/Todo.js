import React from "react";
import "./style.css";

export default function Todo({ todo, toggleTodo }) {
  function handleTodoClick() {
    toggleTodo(todo.id);
  }

  return (
    //<div>
    <li>
      <label>
        <input
          className="checkBox"
          type="checkbox"
          checked={todo.complete}
          onChange={handleTodoClick}
        />
        {todo.name}
      </label>
    </li>
    // </div>
  );
}
