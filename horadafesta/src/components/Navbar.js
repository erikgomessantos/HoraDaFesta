import "../components/Navbar.css";
import { NavLink } from "react-router-dom";
import { UserAuthentication } from "../hooks/userAuthentication";
import { useAuthValue } from "../context/AuthContext";

const Navbar = () => {
    const {user} = useAuthValue();
    const {logout} = UserAuthentication();

    return <nav className="navbar">
        <NavLink to="/">
            Hora da Festa
        </NavLink>
        <ul className="links_list">
            {user && (
               <>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
               </> 
            )}
            {!user && (
                <>
                    <li>
                        <NavLink to="/login">Login</NavLink>
                    </li>
                    <li>
                        <NavLink to="/register">Cadastro</NavLink>
                    </li>
                </>
            )}
            {user && (
                <>
                    <li>
                        <NavLink to="/parties/create">Criar Festa</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard">Dashboard</NavLink>
                    </li>
                    <li>
                        <NavLink to="/party">Festas</NavLink>
                    </li>
                    <li>
                        <button onClick={logout}>Sair</button>
                    </li>
                </>
            )}
        </ul>
    </nav>;
};

export default Navbar;