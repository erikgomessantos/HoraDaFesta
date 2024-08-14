import "./Navbar.css";

// Components
import { NavLink, Link } from "react-router-dom";
import {
  BsSearch,
} from "react-icons/bs";
import { LuPartyPopper } from "react-icons/lu";
import { IoHome } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";

// Hooks
// import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// Redux
import { logout, reset } from "../slices/authSlice";

const Navbar = () => {
  const { auth } = useAuth();
  const { user } = useSelector((state) => state.auth);

  const navigate = useNavigate();

  const dispatch = useDispatch();

//   const [query, setQuery] = useState("");

  const handleLogout = () => {
    dispatch(logout());
    dispatch(reset());

    navigate("/login");
  };

//   const handleSearch = (e) => {
//     e.preventDefault();

//     if (query) {
//       return navigate(`/search?q=${query}`);
//     }
//   };

  return (
    <nav id="nav">
      <Link to="/">
        <h2>Hora da Festa</h2>
      </Link>
      <form id="search-form" >
        <BsSearch />
        <input
          type="text"
          placeholder="Pesquisar"
          
        />
      </form>
      <ul id="nav-links">
        {auth ? (
          <>
            <li>
              <NavLink to="/">
                <IoHome />
              </NavLink>
            </li>
            {user && (
              <li>
                <NavLink to={`/users/${user._id}`}>
                  <LuPartyPopper />
                </NavLink>
              </li>
            )}
            <li>
              <NavLink to="/profile">
                <IoPerson />
              </NavLink>
            </li>
            <li>
              <span onClick={handleLogout}>Sair</span>
            </li>
          </>
        ) : (
          <>
            {" "}
            <li>
              <NavLink to="/login">Entrar</NavLink>
            </li>
            <li>
              <NavLink to="/register">Cadastrar</NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;