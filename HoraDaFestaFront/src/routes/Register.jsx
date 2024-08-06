import React from "react";
import { Link } from "react-router-dom";
import "./login.css";

const Register = () => {
    return <section className="center-page">
        <div className="form-page">
            <h2>Hora da Festa</h2>
            <h3>Cadastrar</h3>
            <form>
                <label>
                    <span>Nome</span>
                    <input type="text" placeholder="Nome" 
                    required
                    />
                </label>
                <label>
                    <span>Email</span>
                    <input type="text" placeholder="Email" 
                    required
                    />
                </label>
                <label>
                    <span>Senha</span>
                    <input type="text" placeholder="Senha" 
                    required
                    />
                </label>
                <input type="submit" value="Cadastrar" className="btn"/>
                <p>Já possui conta? <Link to="/login">Fazer Login</Link></p>
            </form>
        </div>;
    </section> 
};

export default Register;