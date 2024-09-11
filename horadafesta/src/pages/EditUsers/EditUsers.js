import "../Contacts/Contacts.css";

import { useState } from "react";

const EditUsers = () => {

    const [displayName, setDisplayName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault()
    }    

    return (
        <div className="register">
            <h2>Editar Usuário</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Nome:*</span>
                    <input
                     type="text"
                     name="displayName"
                     required
                     placeholder="Nome de usuário"
                     value={displayName}
                     onChange={(e) => setDisplayName(e.target.value)}
                    />
                </label>
                <label>
                    <span>E-mail:*</span>
                    <input
                     type="email"
                     name="email"
                     required
                     placeholder="E-mail"
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                <label>
                    <span>Senha:*</span>
                    <input
                     type="password"
                     name="password"
                     required
                     placeholder="Insira sua senha"
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <label>
                    <span>Confirmação de Senha:*</span>
                    <input
                     type="password"
                     name="confirmPassword"
                     required
                     placeholder="Confirme sua senha"
                     value={confirmPassword}
                     onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </label>
                <button className="btn">Editar</button>
                {error && <p className="error">{error}</p>}
            </form>
        </div>
    )
};

export default EditUsers;