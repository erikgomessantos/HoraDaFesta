import React from "react";

const Register = () => {
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
            <input type="submit" value="Registrar" className="btn"/>
        </form>
        </div>
    </div>
};

export default Register;