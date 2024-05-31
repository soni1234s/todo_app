import AddTodoForm from "./components/add_todo_form";
import NavBar from "./components/navbar";


const App = () => {
    return ( 
        <main className="min-w-full min-h-screen flex flex-col items-center ">
        <h1 className="font-extrabold">TODO APP</h1>
        <NavBar />
        <AddTodoForm />
    </main>
    );
}


 
export default App;