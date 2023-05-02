import { useRef } from "react";

import classes from "./TaskForm.module.css";

const TaskForm = (props) => {
  const taskInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredValue = taskInputRef.current.value;

    if (enteredValue.trim().length > 0) {
      props.onEnterTask(enteredValue);
    }
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <input type="text" ref={taskInputRef} />
      <button className="btn">
        {!props.loading && <i class="bi bi-plus-circle"></i>}
        {props.loading ? "Sending..." : " Add Task"}
      </button>
      <a
        className="btn"
        href="https://github.com/rubanero14/React-Lesson-Section-15-Creating-Custom-React-Hooks"
        target="_blank"
        rel="noreferrer"
      >
        <i class="bi bi-filetype-jsx"></i> Source Code
      </a>
    </form>
  );
};

export default TaskForm;
