import React from "react";

const Login = () => {
    return <div class="container">
        <h1 class="login-title">Hora da Festa</h1>
        <div class="login-container">
        <h2>Login</h2>
        <form onSubmit={(e) => createUser(e)}>
            <label>
                <span>Nome de Usuário</span>
                <input type="text" placeholder="Nome" 
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
        </form>
        <p>Ou</p>
        <input type="submit" value="Fazer Login com google"/>
        <p>Não tem uma conta? Cadastrar</p>
        </div>
    </div>
};

export default Login;