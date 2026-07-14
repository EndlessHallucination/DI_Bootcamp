import { useContext, useRef, useState } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskItem({ task }) {
  const { dispatch } = useContext(TaskContext);

  const [editing, setEditing] = useState(false);

  const editRef = useRef();

  function saveTask() {
    dispatch({
      type: "EDIT_TASK",
      payload: {
        id: task.id,
        text: editRef.current.value,
      },
    });

    setEditing(false);
  }

  return (
    <li>
      {editing ? (
        <>
          <input
            ref={editRef}
            defaultValue={task.text}
          />

          <button onClick={saveTask}>Save</button>
        </>
      ) : (
        <>
          <span
            style={{
              textDecoration: task.completed ? "line-through" : "none",
            }}
          >
            {task.text}
          </span>

          <button
            onClick={() =>
              dispatch({
                type: "TOGGLE_TASK",
                payload: task.id,
              })
            }
          >
            {task.completed ? "Undo" : "Complete"}
          </button>

          <button onClick={() => setEditing(true)}>
            Edit
          </button>

          <button
            onClick={() =>
              dispatch({
                type: "DELETE_TASK",
                payload: task.id,
              })
            }
          >
            Delete
          </button>
        </>
      )}
    </li>
  );
}

export default TaskItem;