import { Route, Routes, Navigate } from "react-router-dom";
import AppLayout from "./layouts/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import MyTasks from "./pages/MyTasks";
import { TaskProvider } from "./context/TaskContext";

export default function App() {
  return (
    <TaskProvider>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/tasks" element={<MyTasks />} />
        </Route>
      </Routes>
    </TaskProvider>
  );
}
