import partyFetch from "../axios/config";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import useToast from "../../hooks/useToast";

const Details = () => {
    const {id} = useParams();
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    // Load User
    useEffect(() => {
        const loadUser = async () => {
            const res = await partyFetch.get(`/users/${id}`);

            setUser(res.data);
        }

        loadUser();
    }, []);

    // Delete this user
    const handleDelete = async () => {
        const res = await partyFetch.delete(`/users/${id}`);

        if(res.status === 200) {
            navigate("/users")

            useToast(res.data.msg)
        }
    };

    if(!user) return <p>Carregando...</p>;

    return <div>
        <h1>{user.name}</h1>
        <p>{user.email}</p>
        <div className="actions-container">
            <Link to={`/users/edit/${user._id}`}>Editar</Link>
            <button onClick={handleDelete}>Excluir</button>
        </div>
    </div>;
};

export default Details;