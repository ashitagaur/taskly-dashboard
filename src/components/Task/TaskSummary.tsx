import { useTasks } from "../../context/TaskContext";
export default function TaskSummary() {
  const { tasks } = useTasks();
  const sum = tasks.reduce(
    (a, t) => {
      a[t.status] += 1;
      return a;
    },
    { pending: 0, in_progress: 0, completed: 0 }
  );
  return (
    <div className="grid grid-cols-3 gap-4 mb-6">
      {Object.entries(sum).map(([s, c]) => (
        <div key={s} className="bg-white rounded-lg shadow p-4 text-center">
          <p className="text-sm text-gray-500 capitalize">
            {s.replace("_", " ")}
          </p>
          <p className="text-2xl font-bold">{c}</p>
        </div>
      ))}
    </div>
  );
}
