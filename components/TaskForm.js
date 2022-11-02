import { useState } from "react";

const TaskForm = ({ onClick }) => {

    const [task, setTask] = useState("");
    const [desc, setDesc] = useState("");
    const [completed, setCompleted] = useState(false);
    const [error, setError] = useState(false);

    const clearValue = () => {
        setTask("");
        setDesc("");
        setCompleted(false);
        setError(false);
    }

    return (
        <div className="modal" id="task-form">
            <div className="modal-box">
                <h3 className="font-bold text-lg">Create New Task</h3>
                <input type="text"
                    className="input w-full mx-1 my-3"
                    value={task}
                    placeholder="name"
                    onChange={(e) => { setTask(e.target.value) }}
                />
                <input type="text"
                    className="input w-full mx-1 my-3"
                    value={desc}
                    placeholder="description"
                    onChange={(e) => { setDesc(e.target.value) }}
                />
                <span className="m-4 my-8 label-text">Completed?</span>
                <input type="checkbox"
                    checked={completed}
                    className="ml-4 checkbox checkbox-success align-middle"
                    onChange={() => { setCompleted(!completed) }}
                />
                {error ? <p className="text-error">Task Name cannot be empty</p> : ""}
                <div className="modal-action justify-center">
                    <a href="#"
                        onClick={() => {
                            if (task === "" || task === null) {
                                setError(true);
                            } else {
                                onClick(task, desc, completed)
                            }
                            clearValue();
                        }}
                        className="btn btn-success">Create</a>
                    <a href="#" className="btn btn-error"
                        onClick={() => {
                            clearValue();
                        }}>Cancel</a>
                </div>
            </div>
        </div>
    )
}

export default TaskForm;