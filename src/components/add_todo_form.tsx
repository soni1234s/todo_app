import { useState } from "react";
import { useTodos } from "../store/todos";
import TodoList from "./todo_list";

const AddTodoForm = () => {
    const [todo, setTodo] = useState("");
    const {handleAddTodo} = useTodos();

    function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        handleAddTodo(todo)
        setTodo("")
    }

    return ( <form onSubmit={handleFormSubmit}>
        <input type="text" name="" id=""  value={todo} onChange={(e)=>setTodo(e.target.value)}/>
        <button>ADD</button>

        {
            <TodoList/>
        }
    </form> );
}
 
export default AddTodoForm;