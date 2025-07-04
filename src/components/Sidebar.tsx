import { NavLink } from "react-router-dom";
const itemClass = ({ isActive }: { isActive: boolean }) =>
  `block px-3 py-2 rounded-md hover:bg-gray-200 ${
    isActive ? "bg-gray-200 font-semibold" : ""
  }`;
export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-screen w-60 bg-white shadow flex flex-col p-4">
      <h1 className="text-2xl font-bold mb-6">📋 Tickr </h1>
      <nav className="space-y-1 flex-1">
        <NavLink to="/dashboard" className={itemClass}>
          Dashboard
        </NavLink>
        <NavLink to="/tasks" className={itemClass}>
          My Tasks
        </NavLink>
      </nav>
    </aside>
  );
}
