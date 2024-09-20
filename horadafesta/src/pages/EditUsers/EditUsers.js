import "../../App.css";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuthValue } from "../../context/AuthContext";
import { UserUpdateParty } from "../../hooks/UserUpdateParty";
import { UserFetchParty } from "../../hooks/UserFetchParty";


const EditUsers = () => {

    const {id} = useParams();
    const {document: users} = UserFetchParty("users", id);

    const [displayName, setDisplayName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [setError] = useState("");
    const [formError, setFormError] = useState("");

    // Carrega os dados já preenchidos ao formulário
    useEffect(() => {
        if(users) {
            setDisplayName(users.displayName)
            setEmail(users.email)
            setPassword(users.password)
            setConfirmPassword(users.confirmPassword)
        }
    }, [users])

    const {user} = useAuthValue();
    const {updateDocument, response} = UserUpdateParty("users");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault()
        setFormError("");

        if(formError) return;

        const data = {
            displayName,
            email,
            password,
            confirmPassword,
            uid: user.uid,
            createdBy: user.displayName
        };

        if(password !== confirmPassword) {
            setError("As senhas precisam ser iguais!")
            return;
        }

        updateDocument(id, data);

        navigate("/users");
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
                {!response.loading && <button className="btn">Editar</button>}
                        {response.loading && (
                            <button className="btn" disabled>
                                Aguarde.. .
                            </button>
                        )}
                        {(response.error || formError) && (
                            <p className="error">{response.error || formError}</p>
                        )}
            </form>
        </div>
    )
};

export default EditUsers;