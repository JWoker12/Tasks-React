import { useContext, useEffect, useState } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const { createTask } = useContext(TaskContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        createTask(title, description);
        setTitle("");
        setDescription("");
    };
    return (
        <div className="max-w-md mx-auto">
            <form
                onSubmit={handleSubmit}
                className="bg-slate-800 text-center text-white p-10 rounded-md mb-4"
            >
                <h1 className="text-xl font-bold capitalize">New Task</h1>
                <input
                    placeholder="New Task"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    className="bg-slate-300 p-3 w-full mb-2 rounded-md text-black"
                />
                <textarea
                    placeholder="Description New Task"
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                    className="bg-slate-300 p-3 w-full mb-2  rounded-md text-black"
                ></textarea>
                <button className="bg-blue-500 p-3 py-1 text-white rounded-md">Save</button>
            </form>
        </div>
    );
}

export default TaskForm;
