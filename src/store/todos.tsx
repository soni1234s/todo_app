import { ReactNode, createContext, useContext, useState } from "react";

export type TodosProviderProps = {
    children: ReactNode
}

export type TodoData = {
    todos: Todo[];
    handleAddTodo: (task: string) => void;
    toggleTodo:(id:string) => void;
    deleteTodo: (id:string) => void;
}

export type Todo = {
    id: string;
    task: string;
    isCompleted: boolean;
    createdAt: Date;   
}

export const todosContext = createContext<TodoData | null>(null);

export const TodosProvider = ({children} : TodosProviderProps) =>{
    const[todos, setTodos] = useState<Todo[]>(()=>{
        try {
            const newTodos = localStorage.getItem("todos") || "[]";
            return JSON.parse(newTodos) as Todo[];

        } catch (error) {
            return [];
        }
    })


    //add todo
    const handleAddTodo = (task: string) => {
    setTodos((prev) => {
const newTodos: Todo[] = [
    {
        id: Math.random().toString(),
        task: task,
        isCompleted: false,
        createdAt: new Date()

}, ...prev]

localStorage.setItem("todos", JSON.stringify(newTodos));


return newTodos;
    }
)
    }

    //toggle todo
    const toggleTodo = (id: string) => {
   
        setTodos((prev) => {
      let newTodos =  prev.map((todo)=> {
   if(todo.id === id){
    return {...todo, isCompleted: !todo.isCompleted}
   }
   return todo;
      })
      localStorage.setItem("todos", JSON.stringify(newTodos));

      return newTodos
        })
       console.log(id);
    }

    //delete todo
    const deleteTodo = (id: string) => {
        console.log(id);
   let newTodos =

        todos.filter((todo) => {
if(todo.id !== id){
    return todo;
}
        })
localStorage.setItem("todos", JSON.stringify(newTodos));


    setTodos(newTodos);
     }

   return <todosContext.Provider value={{todos, handleAddTodo, toggleTodo, deleteTodo}}>
    {children}
   </todosContext.Provider>
}

// consumer
export const useTodos = () => {
    const todosConsumer = useContext(todosContext);
    if(!todosConsumer){
        throw new Error("please wrap your provider with app")
    }
    return todosConsumer;
}