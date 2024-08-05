import React from "react";
import { Link } from "react-router-dom";
import imagemGoogle from "../img/google.png";
import "./login.css";

const Login = () => {
    return <section className="center-page">
        <div className="form-page">
            <h2>Hora da Festa</h2>
            <h3>Login</h3>
            <form>
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
                <input type="submit" value="Login" className="btn"/>
                <p>Ou</p>
                <p className="login-google"><img src={imagemGoogle}/>Fazer login com o Google</p>
                <p>Não tem uma conta? <Link to="/register">Cadastrar</Link></p>
            </form>
        </div>;
    </section> 
};

export default Login;