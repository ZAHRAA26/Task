import React, { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";

const AddTask = () => {
  const { taskList, setTaskList } = useContext(TaskContext);
  const [newTask, setNewTask] = useState({
    description: "",
    status: "Not Started",
  });

  const handleAddTask = () => {
    const updatedTaskList = [
      ...taskList,
      { ...newTask, id: taskList.length + 1 },
    ];
    setTaskList(updatedTaskList);
    setNewTask({ description: "", status: "Not Started" });
  };

  return (
    <div className="add-task">
      <input
        type="text"
        value={newTask.description}
        onChange={(e) =>
          setNewTask({ ...newTask, description: e.target.value })
        }
        placeholder="Task description"
      />
      <select
        value={newTask.status}
        onChange={(e) => setNewTask({ ...newTask, status: e.target.value })}
      >
        <option value="Not Started">Not Started</option>
        <option value="In Progress">In Progress</option>
        <option value="Finished">Finished</option>
      </select>
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default AddTask;
