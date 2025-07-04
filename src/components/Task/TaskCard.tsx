import { Task } from "../../types/task";
import Button from "../UI/Button";
import { formatDate } from "../../utils/date";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

export default function TaskCard({
  task,
  onEdit,
  onDelete,
}: {
  task: Task;
  onEdit: (t: Task) => void;
  onDelete: (id: string) => void;
}) {
  return (
    <div className="bg-white rounded-lg shadow p-4 flex flex-col gap-2">
      <div className="flex justify-between items-start">
        <h3 className="font-semibold">{task.title}</h3>
        <span className="text-xs px-2 py-0.5 rounded-full capitalize bg-gray-100">
          {task.status.replace("_", " ")}
        </span>
      </div>
      {task.description && (
        <p className="text-sm text-gray-600">{task.description}</p>
      )}
      <p className="text-xs text-gray-500">Due: {formatDate(task.dueDate)}</p>
      <div className="flex gap-2 mt-2">
        {/* Edit Button with icon */}
        <Button
          onClick={() => onEdit(task)}
          className="bg-gradient-to-r from-blue-500 to-indigo-600"
          icon={<FaEdit />}
        />

        {/* Delete Button with icon */}
        <Button
          onClick={() => onDelete(task.id)}
          className="bg-gradient-to-r from-red-500 to-pink-600"
          icon={<FaTrashAlt />}
        />
      </div>
    </div>
  );
}
