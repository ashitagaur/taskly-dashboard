import { useForm } from "react-hook-form";
import { Task, TaskStatus } from "../../types/task";
import Button from "../UI/Button";
import Input from "../UI/Input";
import { generateId } from "../../utils/id";
import { FaTimes, FaEdit, FaPlus } from "react-icons/fa";

interface Props {
  initial?: Task;
  onSave: (t: Task) => void;
  onClose: () => void;
}
interface Data {
  title: string;
  description?: string;
  dueDate: string;
  status: TaskStatus;
}

export default function TaskForm({ initial, onSave, onClose }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Data>({
    defaultValues: initial ?? {
      title: "",
      description: "",
      dueDate: "",
      status: "pending",
    },
  });
  const submit = (d: Data) => {
    onSave({ ...d, id: initial?.id ?? generateId() });
    onClose();
  };
  return (
    <form onSubmit={handleSubmit(submit)} className="flex flex-col gap-4">
      <div>
        <label>Title *</label>
        <Input {...register("title", { required: "Required" })} />
        {errors.title && <p className="text-red-600">{errors.title.message}</p>}
      </div>
      <div>
        <label>Description</label>
        <textarea
          {...register("description")}
          className="border rounded p-2 w-full h-24"
        />
      </div>
      <div>
        <label>Due Date *</label>
        <Input
          type="date"
          min={new Date().toISOString().split("T")[0]} // ✅ restricts to today+
          {...register("dueDate", { required: "Required" })}
        />
        {errors.dueDate && (
          <p className="text-red-600">{errors.dueDate.message}</p>
        )}
      </div>

      <div>
        <label>Status *</label>
        <select {...register("status")} className="border p-2 rounded w-full">
          <option value="pending">Pending</option>
          <option value="in_progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
      </div>
      <div className="flex justify-end gap-2">
        {/* Cancel Button with 'X' icon */}
        <Button
          type="button"
          icon={<FaTimes />}
          label="Cancel"
          className="bg-gradient-to-r from-gray-500 to-gray-600"
          onClick={onClose}
        />

        {/* Conditional Add or Update button */}
        <Button
          type="submit"
          icon={initial ? <FaEdit /> : <FaPlus />}
          label={initial ? "Update" : "Add"}
          className={
            initial
              ? "bg-gradient-to-r from-indigo-500 to-indigo-700"
              : "bg-gradient-to-r from-green-500 to-emerald-600"
          }
        />
      </div>
    </form>
  );
}
