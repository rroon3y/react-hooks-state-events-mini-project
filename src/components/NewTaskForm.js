import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("Code");

  function handleSubmit(e) {
    e.preventDefault();
    const newTask = { text, category };
    onTaskFormSubmit(newTask);
    setText("");
    setCategory("Code");
  }

  const categoryOptions = categories
    .filter((cat) => cat !== "All")
    .map((cat) => (
      <option key={cat} value={cat}>
        {cat}
      </option>
    ));

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="text"
        placeholder="New task details"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <select name="category" value={category} onChange={(e) => setCategory(e.target.value)}>
        {categoryOptions}
      </select>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
