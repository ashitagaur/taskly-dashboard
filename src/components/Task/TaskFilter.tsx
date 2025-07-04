import { TASK_STATUSES } from "../../config/taskStatus";
export default function TaskFilter({
  statusFilter,
  setStatusFilter,
  sortBy,
  setSortBy,
}: {
  statusFilter: string;
  setStatusFilter: (v: string) => void;
  sortBy: string;
  setSortBy: (v: string) => void;
}) {
  return (
    <div className="flex gap-4 mb-4">
      <select
        className="border p-2 rounded"
        value={statusFilter}
        onChange={(e) => setStatusFilter(e.target.value)}
      >
        <option value="all">All</option>
        {TASK_STATUSES.map((s) => (
          <option key={s.value} value={s.value}>
            {s.label}
          </option>
        ))}
      </select>
      <select
        className="border p-2 rounded"
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
      >
        <option value="dueDate-asc">Due Date ↑</option>
        <option value="dueDate-desc">Due Date ↓</option>
      </select>
    </div>
  );
}
