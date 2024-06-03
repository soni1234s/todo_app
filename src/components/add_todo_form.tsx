import { useState } from "react";
import { useTodos } from "../store/todos";
import TodoList from "./todo_list";

const AddTodoForm = () => {
    const [todo, setTodo] = useState("");
    const {handleAddTodo} = useTodos();

    function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        if(todo !== ""){
            handleAddTodo(todo)
       }
        setTodo("")
    }

    return ( <form onSubmit={handleFormSubmit} className="w-3/5">

        <div className="w-full flex justify-between py-2"><input type="text" name="" id=""  value={todo} onChange={(e)=>setTodo(e.target.value)} className="placeholder-shown:border-gray-300 w-10/12 p-2 border border-gray-500" placeholder="Add your task"/>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">ADD</button></div>
        

        {
            <TodoList/>
        }
    </form> );
}
 
export default AddTodoForm;