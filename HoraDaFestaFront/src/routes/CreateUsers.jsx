import partyFetch from "../axios/config";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useToast from "../../hooks/useToast";
import "./Form.css";

const CreateUsers = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    // Create a new User
    const createUser = async (e) => {
        e.preventDefault();

        try {
            const user = {
                name,
                email,
                password,
            };
    
            const res = await partyFetch.post("/users", user);
    
            if(res.status === 201) {
                navigate("/");
    
                useToast(res.data.msg);
            }
        } catch (error) {
            useToast(error.response.data.msg, "error");
        }
    };

    return <div className="form-page">
        <h2>Criar Novo Usuário</h2>
        <form onSubmit={(e) => createUser(e)}>
            <label>
                <span>Nome</span>
                <input type="text" placeholder="Nome" 
                required 
                onChange={(e) => setName(e.target.value)}
                value={name}
                />
            </label>
            <label>
                <span>Email</span>
                <input type="text" placeholder="Email" 
                required
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                />
            </label>
            <label>
                <span>Senha</span>
                <input type="text" placeholder="Senha" 
                required
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                />
            </label>
            <input type="submit" value="Criar Usuário" className="btn"/>
        </form>
    </div>;
};

export default CreateUsers;