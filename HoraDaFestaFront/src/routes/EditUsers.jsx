import partyFetch from "../axios/config";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useToast from "../../hooks/useToast";

const EditUser = () => {
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

    const updateUser = async (e) => {
        e.preventDefault();

        try {
            
            const res = await partyFetch.put(`/users/${user._id}`, user);

            if(res.status === 200) {
                navigate(`/users/${id}`);

                useToast(res.data.msg);
            }

        } catch (error) {

        useToast(error.response.data.msg, "error")

        }
    };

    if (!user) return <p>Carregando...</p>;

    return (
        <div className="form-page">
          <h2>Editar Usuário</h2>
          <form onSubmit={(e) => updateUser(e)}>
            <label>
              <span>Nome</span>
              <input
                type="text"
                onChange={(e) => setUser({ ...user, name: e.target.value })}
                value={user.name}
                required
              />
            </label>
            <label>
              <span>Email:</span>
              <input
                type="text"
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                value={user.email}
                required
              />
            </label>
            <label>
              <span>Senha:</span>
              <input
                type="text"
                onChange={(e) => setUser({ ...user, email: e.target.value})}
                value={user.password}
                required
             />
            </label>
            <input type="submit" value="Editar Usuário" className="btn" />
          </form>
        </div>
      );
};

export default EditUser;