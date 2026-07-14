import { useContext, useRef } from "react";
import { TaskContext } from "../context/TaskContext";

function AddTask() {
  const { dispatch } = useContext(TaskContext);
  const inputRef = useRef();

  function addTask() {
    const text = inputRef.current.value.trim();

    if (!text) return;

    dispatch({
      type: "ADD_TASK",
      payload: text,
    });

    inputRef.current.value = "";
  }

  return (
    <div>
      <input ref={inputRef} placeholder="Enter a task..." />

      <button onClick={addTask}>Add</button>
    </div>
  );
}

export default AddTask;