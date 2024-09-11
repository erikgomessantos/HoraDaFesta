import "../Dashboard/Dashboard.css";

import { Link } from "react-router-dom";

import { UserFetchParties } from "../../hooks/UserFetchParties";
import { UserDeleteParty } from "../../hooks/UserDeleteParty";
// import { useAuthValue } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Users = () => {

    // const {user} = useAuthValue();
    // const uid = user.uid;
    // const {documents: users, loading} = UserFetchParties("users", null, uid);

    const { documents: users, loading } = UserFetchParties("users");

    const {deleteDocument} = UserDeleteParty("users");

    const navigate = useNavigate();

    const [query] = useState("");

    if (query) {
        return navigate(`/search?q=${query}`);
    };

    if(loading) {
        return <p>Carregando</p>
    }

    return (
        <div className="dashboard">
            <h2>Usuários</h2>
            <p>Gerencie os usuários do Sistema!</p>

            <div className="party_header">
                <span>Usuário</span>
                <span>Ações</span>
            </div>

            {users && users.map((users) => <div key={users.id} users={users} className="party_row">
                <p>{users.displayName}</p>
                <div>
                    <Link to={`/users/${users.id}`} className="btn btn-outline">
                        Ver
                    </Link>
                    <Link to={`/users/edit/${users.id}`} className="btn btn-outline">
                        Editar
                    </Link>
                    <button onClick={() => deleteDocument(users.id)} className="btn btn-outline btn-danger">
                        Excluir
                    </button>
                </div>
            </div>)}
        </div>
    )
};

export default Users;