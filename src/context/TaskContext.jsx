import { createContext, useEffect, useState } from "react";
//le doy un alias a tasks ya que el state ya esta tomando este nombre
import { tasks as data } from "../tasks";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
    //creo el tasks con el hook state y le paso la funcion
    const [tasks, setTasks] = useState([]);
    //creo un effect el cual va a guardar la data del objeto que estoy trayendo y se va a ejecutar una vez
    useEffect(() => {
        setTasks(data);
    }, []);

    function createTask(taskTitle, taskDescripion) {
        setTasks([
            ...tasks,
            {
                id: tasks.length,
                title: taskTitle,
                description: taskDescripion,
            },
        ]);
    }

    function deleteTask(taskId) {
        setTasks(tasks.filter((task) => task.id !== taskId));
    }
    return (
        <TaskContext.Provider
            value={{
                tasks,
                createTask,
                deleteTask,
            }}
        >
            {props.children}
        </TaskContext.Provider>
    );
}
