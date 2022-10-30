const TaskForm = ({ onSubmit }) => (
    <div className="modal" id="task-form">
        <div className="modal-box">
            <h3 className="font-bold text-lg">Create New Task</h3>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="Name" className="input w-full mx-1 my-3" />
                <input type="text" placeholder="Description" className="input w-full mx-1 my-3" />
                <span className="m-4 my-8 label-text">Completed?</span>
                <input type="checkbox" className="ml-4 checkbox checkbox-success align-middle" />
                <div className="modal-action justify-center">
                    <a href="#"><button className="btn btn-success">Create</button></a>
                    <a href="#" className="btn btn-error">Cancel</a>
                </div>
            </form>
        </div>
    </div>
)

export default TaskForm;