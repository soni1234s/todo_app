import AddTodoForm from "./components/add_todo_form";
import NavBar from "./components/navbar";


const App = () => {
    return ( 
        <main className="flex flex-col justify-center items-center">
        <h1>TODO APP</h1>
        <NavBar />
        <AddTodoForm />
    </main>
    );
}


 
export default App;