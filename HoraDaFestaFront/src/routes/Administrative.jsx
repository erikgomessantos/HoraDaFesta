import partyFetch from "../axios/config";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Form.css";

const Administrative = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Create a new User
    const createUser = (e) => {
        e.preventDefault();

        const user = {
            name,
            email,
            password,
        };
    };

    return <div className="form-page">
        <h2>Painel ADM</h2>
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

export default Administrative;