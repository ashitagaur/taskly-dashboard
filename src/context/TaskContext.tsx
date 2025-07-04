import { createContext, useContext, useReducer, useEffect } from "react";
import { Task } from "../types/task";
import { taskReducer, Action } from "../reducers/taskReducer";
import { load, save } from "../utils/localStorage";

interface Ctx {
  tasks: Task[];
  dispatch: React.Dispatch<Action>;
}
const TaskContext = createContext<Ctx | null>(null);

export const TaskProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [tasks, dispatch] = useReducer(
    taskReducer,
    [],
    () => load<Task[]>("tasks") || []
  );
  useEffect(() => {
    save("tasks", tasks);
  }, [tasks]);
  return (
    <TaskContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => {
  const ctx = useContext(TaskContext);
  if (!ctx) throw new Error("useTasks must be in provider");
  return ctx;
};
