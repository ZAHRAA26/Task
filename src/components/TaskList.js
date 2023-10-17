import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import Task from "./Task";

const TaskList = () => {
  const { taskList } = useContext(TaskContext);

  return (
    <div>
      {taskList.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
