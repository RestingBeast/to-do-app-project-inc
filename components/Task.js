import { DateTime } from "luxon";
import { useState } from "react";

const Task = ({ task, onChange }) => {
  const date = new DateTime(task.created_at);
  const [checked, setChecked] = useState(task.status === 0 ? false : true);
  const onChangeHandler = () => {
    setChecked(!checked);
    onChange(!checked, task.id);
  }
  return (
    <div className="card w-96 bg-base-300 shadow-xl">
      <div className="card-body">
        <div className="card-title">
          <h2 className="flex-1">{task.name}</h2>
          <input
            type="checkbox"
            className="checkbox checkbox-success"
            checked={checked}
            onChange={onChangeHandler}
          />
        </div>
        <p>Created At: {date.toFormat("MMMM dd yyyy hh:mm a")}</p>
        <p>{task.description}</p>
        <div className="card-actions justify-center">
          <button className="btn btn-error">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default Task;
