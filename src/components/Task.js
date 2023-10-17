import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const Task = ({ task }) => {
  const { setTaskList } = useContext(TaskContext);

  const handleEdit = () => {
    // Implement edit functionality
  };

  const handleDelete = () => {
    // Implement delete functionality
  };

  return (
    <div>
      <span>{task.description}</span>
      <span>{task.status}</span>
      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Task;
