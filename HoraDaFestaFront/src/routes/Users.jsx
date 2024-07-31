import partyFetch from "../axios/config"; // Comunicação com API
import { useState, useEffect } from "react"; // Salvar os dados e Requisição na API
import { Link } from "react-router-dom"; // Adicionar o Link para a página de Uusários Individuais

const Users = () => {
    const [users, setUsers] = useState(null);

    // Load Users
    useEffect(() => {

        const loadUsers = async () => {
            const res = await partyFetch.get("/users");

            console.log(res);

            setUsers(res.data);
        };

        loadUsers();

    }, []);

    if(!users) return <p>Carregando...</p>;

    return <div>
        <div>
            {users.length === 0 && <p>Não há Usuários Cadastrados!</p>}
            {users.map((user) => (
                <div key={user._id}>
                    <p>Nome: {user.name}</p>
                    <p>Email: {user.email}</p>
                </div>
            ))}
        </div>
    </div>
};

export default Users;