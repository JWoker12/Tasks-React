import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskCard({ task }) {
    const { deleteTask } = useContext(TaskContext);
    return (
        <div key={task.id} className="bg-stone-800 text-white p-4 rounded-md">
            <h1 className="text-xl font-bold capitalize">{task.title}</h1>
            <p className="text-gray-400 text-sm">{task.description}</p>
            <button
                onClick={() => deleteTask(task.id)}
                className="bg-red-500 text-white p-2 rounded-md m-2"
            >
                Delete
            </button>
            <button className="bg-green-500 text-white p-2 rounded-md m-2">Update</button>
        </div>
    );
}

export default TaskCard;
