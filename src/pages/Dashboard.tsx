import { useTasks } from "../context/TaskContext";
import { useMemo } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Legend,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

export default function Dashboard() {
  const { tasks } = useTasks();
  const summary = useMemo(
    () => ({
      pending: tasks.filter((t) => t.status === "pending").length,
      in_progress: tasks.filter((t) => t.status === "in_progress").length,
      completed: tasks.filter((t) => t.status === "completed").length,
    }),
    [tasks]
  );
  const total = tasks.length;
  const pct = total ? Math.round((summary.completed / total) * 100) : 0;
  const pie = [
    { name: "Pending", value: summary.pending, color: "#fbbf24" },
    { name: "In Progress", value: summary.in_progress, color: "#3b82f6" },
    { name: "Completed", value: summary.completed, color: "#10b981" },
  ];

  // weekly counts
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const weekly = useMemo(
    () => days.map((d) => ({ day: d, Completed: 0, Pending: 0 })),
    []
  );
  tasks.forEach((t) => {
    const d = days[new Date(t.dueDate).getDay()];
    const obj = weekly.find((w) => w.day === d);
    if (obj) {
      if (t.status === "completed") obj.Completed += 1;
      else obj.Pending += 1;
    }
  });

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Dashboard</h2>
      <div className="grid grid-cols-3 gap-4">
        {Object.entries(summary).map(([k, v]) => (
          <div key={k} className="bg-white rounded shadow p-4 text-center">
            <p className="uppercase text-xs text-gray-500">
              {k.replace("_", " ")}
            </p>
            <p className="text-3xl font-bold">{v}</p>
          </div>
        ))}
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded shadow p-4">
          <h3 className="font-semibold mb-2">Tasks by Status</h3>
          <ResponsiveContainer width="100%" height={270}>
            <PieChart>
              <Pie
                data={pie}
                innerRadius={50}
                outerRadius={90}
                dataKey="value"
                label
              >
                {pie.map((d, i) => (
                  <Cell key={i} fill={d.color} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-white rounded shadow p-4">
          <h3 className="font-semibold mb-2">Weekly Progress</h3>
          <ResponsiveContainer width="100%" height={270}>
            <LineChart data={weekly}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis allowDecimals={false} />
              <Tooltip />
              <Line type="monotone" dataKey="Completed" stroke="#10b981" />
              <Line type="monotone" dataKey="Pending" stroke="#fbbf24" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="bg-white rounded shadow p-6 flex flex-col items-center">
        <h3 className="font-semibold mb-2">Overall Completion</h3>
        <div className="relative">
          <svg width="140" height="140">
            <circle
              cx="70"
              cy="70"
              r="60"
              stroke="#e5e7eb"
              strokeWidth="12"
              fill="none"
            />
            <circle
              cx="70"
              cy="70"
              r="60"
              stroke="#10b981"
              strokeWidth="12"
              fill="none"
              strokeDasharray="{pct * 3.77} 999"
              strokeLinecap="round"
              transform="rotate(-90 70 70)"
            />
          </svg>
          <span className="absolute inset-0 flex items-center justify-center text-xl font-bold">
            {pct}%
          </span>
        </div>
      </div>
    </div>
  );
}
