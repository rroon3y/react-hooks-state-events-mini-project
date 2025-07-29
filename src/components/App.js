import React, { useState } from "react";
import TaskList from "./TaskList";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredTasks = tasks.filter((task) => {
    return selectedCategory === "All" || task.category === selectedCategory;
  });

  function handleDelete(deletedTaskText) {
    const updatedTasks = tasks.filter((task) => task.text !== deletedTaskText);
    setTasks(updatedTasks);
  }

  function handleCategoryChange(category) {
    setSelectedCategory(category);
  }

  function handleTaskFormSubmit(newTask) {
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleTaskFormSubmit} />
      <TaskList tasks={filteredTasks} onDelete={handleDelete} />
    </div>
  );
}

export default App;
