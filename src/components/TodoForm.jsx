import { useState } from "react"

export const TodoForm = ({task, setTask}) => {

    const [inputValue, setInputValue] = useState({});

    const handleInputChange = (value) => {
        setInputValue({id : value, content : value, checked : false})
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();

        const {id, content, checked} = inputValue;

        const ifTodoContentMatched = task.find(
            (currTask) => currTask.content === content
        )

        if(ifTodoContentMatched) return;
        if(!content) return;

        setTask((prev) => [...prev, {id, content, checked}])

        setInputValue({id : "", content : "", checked : false})

    }


    return (
        <div>
            <form onSubmit={handleFormSubmit} >
                <input type="text"
                    autoComplete="off"
                    value={inputValue.content}
                    onChange={(event) => handleInputChange(event.target.value)}
                />
                <button type="submit" >ADD</button>
            </form>
        </div>
    )
}