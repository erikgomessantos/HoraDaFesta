import partyFetch from "../axios/config";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useToast from "../../hooks/useToast";
import "./login.css";

const Register = () => {
    
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    // Register a new user
    const registerUser = async (e) => {
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

    return <section className="center-page">
        <div className="form-page">
            <h2>Hora da Festa</h2>
            <h3>Cadastrar</h3>
            <form onSubmit={(e) => registerUser(e)}>
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
                <input type="submit" value="Cadastrar" className="btn"/>
                <p>Já possui conta? <Link to="/login">Fazer Login</Link></p>
            </form>
        </div>;
    </section> 
};

export default Register;