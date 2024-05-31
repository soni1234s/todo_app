import { Link, useSearchParams } from "react-router-dom";

const NavBar = () => {

    const [searchPram] = useSearchParams();

    let query = searchPram.get("todos");
    
    return <nav className="w-3/5 p-4 flex flex-wrap justify-between">
        <Link to="/"className={`w-1/3 text-center ${query === null ? 'underline' : ''}`}>All</Link>
        <Link to="/?todos=Active"className={`w-1/3 text-center ${query === "Active" ? 'underline' : ''}`}>Active</Link>
        <Link to="/?todos=Completed"className={`w-1/3 text-center ${query === "Completed" ? 'underline' : ''}`}>Completed</Link>
    </nav>
}
 
export default NavBar;