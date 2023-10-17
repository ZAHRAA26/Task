import AddTask from "./components/AddTask";
import RootLayout from "./components/RootLayout";
import TasksPage from "./pages/TasksPage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      // errorElement: <Error />,
      children: [
        {
          path: "tasks",
          element: <TasksPage />,
        },
        {
          path: "new",
          element: <AddTask />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
