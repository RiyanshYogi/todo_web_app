export const TodoClearAll = ({setTask}) => {

    const handleClearAll = () => {
        setTask([]);
    }

    return (
        <button className="clearall" onClick={handleClearAll} >Clear All</button>
    )
}