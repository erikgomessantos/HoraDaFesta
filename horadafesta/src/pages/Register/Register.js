import { UserAuthentication } from "../../hooks/userAuthentication";
import "../Register/Register.css";
import { useState, useEffect } from "react";

import { UserInsert } from "../../hooks/UserInsert";

const Register = () => {
    const [displayName, setDisplayName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const {insertDocument} = UserInsert("users");

    const { createUser, error: authError } = UserAuthentication();

    const handleSubmit = async (e) => {
        e.preventDefault()

        setError("")

        const user = {
            displayName,
            email,
            password
        }

        if(password !== confirmPassword) {
            setError("As senhas precisam ser iguais!")
            return;
        }

        const res = await createUser(user)

        insertDocument({
            displayName,
            email,
            password,
        })

        console.log(res);
    };

    useEffect(() => {

        if(authError) {
            setError(authError);
        }

    }, [authError]);
    
    return (
        <div className="register">
            <h1>Cadastre-se para organizar suas festas</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Nome:</span>
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
                    <span>E-mail:</span>
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
                    <span>Senha:</span>
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
                    <span>Confirmação de Senha:</span>
                    <input
                     type="password"
                     name="confirmPassword"
                     required
                     placeholder="Confirme sua senha"
                     value={confirmPassword}
                     onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </label>
                <button className="btn">Cadastrar</button>
                {error && <p className="error">{error}</p>}
            </form>
        </div>
    );
};

export default Register;