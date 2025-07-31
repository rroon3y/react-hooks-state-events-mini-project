import React from "react";

function Task({ id, text, category, onDelete }) {
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button onClick={() => onDelete(id)}>X</button>
    </div>
  );
}

export default Task;