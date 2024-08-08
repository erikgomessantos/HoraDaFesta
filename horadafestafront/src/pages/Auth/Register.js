import "../Auth/Auth.css";

// Components
import { Link } from "react-router-dom";
// import Message from "../../components/Message";

// Hooks
import { useState, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";

const Register = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div>
            <h2>Hora da Festa</h2>
            <p className="subtitle">Cadastre-se para criar suas festas</p>
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                placeholder="Nome"
                // onChange={(e) => setName(e.target.value)}
                // value={name}
                />
                <input
                type="email"
                placeholder="E-mail"
                // onChange={(e) => setEmail(e.target.value)}
                // value={email}
                />
                <input
                type="password"
                placeholder="Senha"
                // onChange={(e) => setPassword(e.target.value)}
                // value={password}
                />
                <input
                type="password"
                placeholder="Confirme a senha"
                // onChange={(e) => setConfirmPassword(e.target.value)}
                // value={confirmPassword}
                />
                {/* {!loading && <input type="submit" value="Cadastrar" />}
                {loading && <input type="submit" disabled value="Aguarde..." />}
                {error && <Message msg={error} type="error" />} */}
            </form>
        </div>
    )
}

export default Register