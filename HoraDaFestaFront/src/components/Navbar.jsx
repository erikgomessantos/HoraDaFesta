import { NavLink } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  return (
    <nav id="navbar">
      <h2>Hora da Festa</h2>
      <ul>
        <li>
          <NavLink to="/">Minhas Festas</NavLink>
        </li>
        <li>
          <NavLink to="/party/new" className="btn">
            Criar Festa
          </NavLink>
        </li>
        <li>
        <NavLink to="/user/new" className="btn">
            Criar Usuário
          </NavLink>
        </li>
        <li>
        <NavLink to="/users" className="btn">
            Usuários
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;