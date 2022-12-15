import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
    return (
        <div className="p-5">
            <TaskForm className='m-2'/>
            <TaskList className='m-2'/>
        </div>
    );
}

export default App;
