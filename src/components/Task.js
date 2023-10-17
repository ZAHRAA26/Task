import React, { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";

const Task = ({ task }) => {
  const { taskList, setTaskList } = useContext(TaskContext);
  const [isEditing, setEditing] = useState(false);
  const [newDescription, setNewDescription] = useState(task.description);
  const [newStatus, setNewStatus] = useState(task.status);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    setEditing(false);
    const updatedTaskList = taskList.map((t) => {
      if (t.id === task.id) {
        return { ...t, description: newDescription, status: newStatus };
      }
      return t;
    });
    setTaskList(updatedTaskList);
  };

  const handleDelete = () => {
    const updatedTaskList = taskList.filter((t) => t.id !== task.id);
    setTaskList(updatedTaskList);
  };

  return (
    <div className="task">
      {isEditing ? (
        <>
          <input
            type="text"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
          />
          <select
            value={newStatus}
            onChange={(e) => setNewStatus(e.target.value)}
          >
            <option value="Not Started">Not Started</option>
            <option value="In Progress">In Progress</option>
            <option value="Finished">Finished</option>
          </select>
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <span className="task-description">{task.description}</span>
          <span className="task-status">{task.status}</span>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </>
      )}
    </div>
  );
};

export default Task;
