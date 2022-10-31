const Navbar = ({ deleteAll }) => (
    <div className="navbar bg-blue-500">
        <div className="flex-1">
            <h1 className="normal-case text-xl">My To-Do App</h1>
        </div>
        <div className="flex-none">
            <a href="#task-form" className="btn btn-primary mr-4">Create New Task</a>
            <a href="#confirm-modal"
                className='btn btn-secondary'
            >
                Delete Completed Tasks
            </a>
        </div>
    </div>
)

export default Navbar;