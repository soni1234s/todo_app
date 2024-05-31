import { useSearchParams } from "react-router-dom";
import { useTodos } from "../store/todos";


const TodoList = () => {

    const {todos, toggleTodo, deleteTodo} = useTodos();
    const [searchPram] = useSearchParams();
    
    let filteredData = todos;
    let query = searchPram.get("todos");

    console.log("query:" + query);


     if(query === "Active"){
        filteredData = todos.filter((todo) => {
            return todo.isCompleted == false;
        })
     }

     else if(query === "Completed"){
        filteredData = todos.filter((todo) => {
            return todo.isCompleted == true;
        })
     }
     
    return <>{
        filteredData.map((todo) => {
        return  <li key={todo.id} className="list-none flex justify-between py-4 items-center">
            <input type="checkbox" id={`todo-${todo.id}`}  checked = {todo.isCompleted} onChange={() => {
                toggleTodo(todo.id);
            }} />

            <label htmlFor={`todo-${todo.id}`}>{todo.task}</label>

            {
                todo.isCompleted && (<button type="button" onClick={() => deleteTodo(todo.id)} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700">Delete</button>)
            }
        </li>
        })
}
</>
}
 
export default TodoList;