import { TaskProvider } from "./context/TaskContext";

import AddTask from "./components/AddTask";
import FilterButtons from "./components/FilterButtons";
import TaskList from "./components/TaskList";

function App() {
  return (
    <TaskProvider>
      <div className="container">
        <h1>Task Manager</h1>

        <AddTask />

        <FilterButtons />

        <TaskList />
      </div>
    </TaskProvider>
  );
}

export default App;