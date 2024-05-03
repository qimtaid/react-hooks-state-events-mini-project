import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (text) => {
    setTasks(tasks.filter(task => task.text !== text));
  };

  const tasksToDisplay = tasks.filter(task => selectedCategory === "All" || task.category === selectedCategory);

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      <NewTaskForm categories={CATEGORIES.filter(category => category !== "All")} onTaskFormSubmit={addTask} />
      <TaskList tasks={tasksToDisplay} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
