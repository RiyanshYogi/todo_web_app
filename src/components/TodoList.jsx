
export const TodoList = ({data, checked, onHandleDelete, onHandleCheck}) => {

  

    return (
        <div>
            <span className={checked ? "check" : "uncheck"} >{data}</span> <br />
            <button onClick={() => onHandleCheck(data)} className="checkBtn" >Check</button>
            <button onClick={() => onHandleDelete(data)} className="deleteBtn" >Delete</button>
        </div>
    )
}