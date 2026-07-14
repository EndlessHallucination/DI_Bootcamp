import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import TaskItem from "./TaskItem";

function TaskList() {
  const { state } = useContext(TaskContext);

  let tasks = state.tasks;

  if (state.filter === "completed") {
    tasks = tasks.filter((task) => task.completed);
  }

  if (state.filter === "active") {
    tasks = tasks.filter((task) => !task.completed);
  }

  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
        />
      ))}
    </ul>
  );
}

export default TaskList;