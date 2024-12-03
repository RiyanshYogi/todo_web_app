import { useState } from "react"
import { TodoDate } from "./TodoDate"
import { TodoForm } from "./TodoForm"
import { TodoList } from "./TodoList";
import { TodoClearAll } from "./TodoClearAll";
import { getLocalStorageTodoData, setLocalStorageTodoData } from "./TodoLocalStorage";


export const Todo = () => {

    const [task, setTask] = useState(() => getLocalStorageTodoData());

    setLocalStorageTodoData(task);

    const handleDelete = (value) => {
        const updatedTask = task.filter((currTask) => currTask.content !== value);
        setTask(updatedTask);
    }

    const handleCheck = (content) => {
        const updatedTask = task.map((currTask) => {
            if (currTask.content === content) return { ...currTask, checked: !currTask.checked }
            else return currTask;
        })

        setTask(updatedTask);
    }


    return (
        <>
        <div className="baap">

            <div>
                <h1 className="headingname" >Reyansh Todo</h1>
            </div>
            <div className="timing">
                <TodoDate />
            </div>
            <div className="forming">

                <TodoForm task={task} setTask={setTask} />
            </div>
            <div className="container">
                {
                    task.map((currTask) => {
                        return <TodoList
                            key={currTask.id}
                            data={currTask.content}
                            onHandleDelete={handleDelete}
                            checked={currTask.checked}
                            onHandleCheck={handleCheck}
                            />
                        })
                    }
            </div>

                <TodoClearAll className = "clearall" setTask={setTask} />


                    </div>
        </>
    )
}