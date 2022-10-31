import React from "react";
function TodoItem(props) {
  const { handleChange, deleteTodo, todo } = props;
  const { completed, id, title } = todo;

  return (
    <li className="todo-item">
      <input
        type="checkbox"
        checked={completed}
        onChange={() => handleChange(id)}
      />
      <span className={completed ? "completed" : null}>{title}</span>
      <button className="btn-style" onClick={() => deleteTodo(id)}>
        {" "}
        X{" "}
      </button>
    </li>
  );
}
export default TodoItem;
