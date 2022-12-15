import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import TaskCard from "./TaskCard";

function TaskList() {
    const { tasks } = useContext(TaskContext);

    //valido si los tasks vienen vacios
    return tasks.length != 0 ? (
        <div className="grid grid-cols-4 gap-2">
            {/* leo el objeto con map que lo va a recorrer y traerme una respuesta //?para usar una funcion flecha se usa parentesis en lugar de corchetes*/}
            {tasks.map((task) => (
                <TaskCard key={task.id} task={task} />
            ))}
        </div>
    ) : (
        <div className="text-xl font-bold capitalize text-center">No hay Tasks</div>
    );
}

export default TaskList;
