import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import "./Task.css";

const Task = ({ task }) => {
  const { setTaskList } = useContext(TaskContext);

  const handleEdit = () => {
    // Implement edit functionality
  };

  const handleDelete = () => {
    // Implement delete functionality
  };

  // Define styles for different status
  const statusStyles = {
    "Not Started": { color: "red" },
    "In Progress": { color: "orange" },
    Finished: { color: "green" },
  };

  return (
    <div className="task">
      <span className="task-description">{task.description}</span>
      <span className="task-status" style={statusStyles[task.status]}>
        {task.status}
      </span>
      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Task;
