import React from "react";
import { removeTodo, updateTodo } from "../redux/todo/todoSlice";
import { useDispatch } from "react-redux";

export default function TodoElement({todo}) {
    const [elementChangeBoolean, setElementChangeBoolean] = useState(false)
    const dispatch = useDispatch()

    useEffect(() => {
        setElementChangeBoolean(false);  
        console.log('Element Change Boolean:', elementChangeBoolean);
    }, [elementChangeBoolean]);

    return(
        <>
        <div onClick={() => setElementChangeBoolean(true)}>
            {
            (elementChangeBoolean) 
            ? 
            (<>
            <input 
            id="input-update"
            type="text" 
            size={30}
            value={element}
            onChange={(e) => setElement(e.target.value)}
            />
            <button onClick={() => dispatch(updateTodo(todo))}>Update</button>
            </>) 
            : 
            todo.todo
            }
        </div>
        <button onClick={() => dispatch(removeTodo(todo.id))}>Remove</button>
        </>
    )

}









