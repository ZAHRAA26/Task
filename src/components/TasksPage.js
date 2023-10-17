import React from "react";
import { TaskProvider } from "./context/TaskContext";
import TaskList from "./pages/TaskList";

function TasksPage() {
  return (
    <TaskProvider>
      <div className="App">
        <TaskList />
      </div>
    </TaskProvider>
  );
}

export default TasksPage;
