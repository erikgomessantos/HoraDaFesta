import partyFetch from "../axios/config";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const Details = () => {
    const {id} = useParams();

    const [user, setUser] = useState(null);

    // Load User
    useEffect(() => {
        const loadUser = async() => {
            const res = await partyFetch.get(`/users/${id}`);

            setUser(res.data);
        }

        loadUser();
    }, []);

    if(!user) return <p>Carregando...</p>;

    return <div>
        <h1>{user.name}</h1>
        <p>{user.email}</p>
        <div className="actions-container">
            <Link>Editar</Link>
            <button>Excluir</button>
        </div>
    </div>;
};

export default Details;