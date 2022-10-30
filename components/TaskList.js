import Task from "./Task";

const TaskList = ({ tasks, onChange }) => {
  return (
    <div className="grid grid-cols-4 gap-x-4 gap-y-10 py-10 px-20">
      {tasks.map((task) => (
        <Task key={task.id} task={task} onChange={onChange} />
      ))}
    </div>
  );
};

export default TaskList;
