import { useState } from "react";
import { useTasks } from "../context/TaskContext";
import Button from "../components/UI/Button";
import Modal from "../components/UI/Modal";
import TaskForm from "../components/Task/TaskForm";
import TaskCard from "../components/Task/TaskCard";
import TaskSummary from "../components/Task/TaskSummary";
import TaskFilter from "../components/Task/TaskFilter";
import { Task } from "../types/task";
import { FaPlus } from "react-icons/fa";

export default function MyTasks() {
  const { tasks, dispatch } = useTasks();
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("dueDate-asc");
  const [modal, setModal] = useState(false);
  const [editing, setEditing] = useState<Task | null>(null);

  const filtered = tasks.filter((t) =>
    filter === "all" ? true : t.status === filter
  );
  const sorted = [...filtered].sort((a, b) =>
    sort === "dueDate-asc"
      ? a.dueDate.localeCompare(b.dueDate)
      : b.dueDate.localeCompare(a.dueDate)
  );

  const save = (task: Task) => {
    dispatch({ type: editing ? "UPDATE_TASK" : "ADD_TASK", payload: task });
  };

  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">My Tasks</h2>
        <Button
          icon={<FaPlus />}
          label="Add Task"
          className="bg-gradient-to-r from-green-500 to-emerald-600"
          onClick={() => {
            setEditing(null);
            setModal(true);
          }}
        />
      </div>

      <TaskSummary />
      <TaskFilter
        statusFilter={filter}
        setStatusFilter={setFilter}
        sortBy={sort}
        setSortBy={setSort}
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {sorted.map((t) => (
          <TaskCard
            key={t.id}
            task={t}
            onEdit={(tk) => {
              setEditing(tk);
              setModal(true);
            }}
            onDelete={(id) => dispatch({ type: "DELETE_TASK", payload: id })}
          />
        ))}
      </div>
      <Modal isOpen={modal} onClose={() => setModal(false)}>
        <TaskForm
          initial={editing ?? undefined}
          onSave={save}
          onClose={() => setModal(false)}
        />
      </Modal>
    </>
  );
}
