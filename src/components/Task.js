import React from "react";

function Task({ task, deleteTask }) {
  if (!task) return null; 

  return (
    <div className="task">
      <div className="label">{task.category}</div>
      <div className="text">{task.text}</div>
      <button className="delete" onClick={() => deleteTask(task.text)}>X</button>
    </div>
  );
}


export default Task;
