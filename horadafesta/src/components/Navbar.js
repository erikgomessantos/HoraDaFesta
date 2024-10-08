import "../components/Navbar.css";
import { NavLink } from "react-router-dom";
import { UserAuthentication } from "../hooks/userAuthentication";
import { useAuthValue } from "../context/AuthContext";

const Navbar = () => {
    const {user} = useAuthValue();
    console.log(user)
    const {logout} = UserAuthentication();

    return <nav className="navbar">
        <NavLink to="/">
            Hora da Festa
        </NavLink>
        <ul className="links_list">
            {user &&  (
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
                    
                    {user.uid !== `1SUHyXH3UzeF875EeyoFgA2w5sp2` && (
                    <>
                        <li>
                            <NavLink to="/parties/create">Criar Festa</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contacts">Contatos</NavLink>
                        </li>
                        <li>
                            <NavLink to="/attractions">Atrações</NavLink>
                        </li>
                        <li>
                            <NavLink to="/tasks">Tarefas</NavLink>
                        </li>
                        <li>
                            <NavLink to="/places">Locais</NavLink>
                        </li>
                        <li>
                            <NavLink to="/suppliers">Fornecedores</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard">Dashboard</NavLink>
                        </li>
                    </>
                    )}
                    {user.uid === `1SUHyXH3UzeF875EeyoFgA2w5sp2` && (
                    <>
                        <li>
                            <NavLink to="/users">Usuários</NavLink>
                        </li>
                    </>
                    )}
                    <li>
                        <button onClick={logout}>Sair</button>
                    </li>
                </>
            )}
            
        </ul>
    </nav>;
};

export default Navbar;