import partyFetch from "../axios/config"; 
import { useState, useEffect } from "react"; 
import { Link } from "react-router-dom"; 
import "./Home.css";

const Users = () => {
    const [users, setUsers] = useState(null);

    // Load Users
    useEffect(() => {
        const loadUsers = async () => {
            const res = await partyFetch.get("/users");

            setUsers(res.data);
        };

        loadUsers();

    }, []);

    if(!users) return <p>Carregando...</p>;

    return (
        <div>
            {users.length === 0 && <p>Não há Usuários Cadastrados!</p>}
            {users.map((user) => (
                <div className="party" key={user._id}>
                    <p>Nome: {user.name}</p>
                    <p>Email: {user.email}</p>
                    <Link to={`/users/${user._id}`} className="btn-secondary">
                        Detalhes
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default Users;