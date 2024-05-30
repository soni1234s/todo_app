import { Link } from "react-router-dom";

const NavBar = () => {
    return <nav>
        <Link to="/" >All</Link>
        <Link to="/?todos=Active">Active</Link>
        <Link to="/?todos=Completed">Completed</Link>
    </nav>
}
 
export default NavBar;