import "../../App.css";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuthValue } from "../../context/AuthContext";
import { UserUpdateParty } from "../../hooks/UserUpdateParty";
import { UserFetchParty } from "../../hooks/UserFetchParty";

const EditTasks = () => {

    const {id} = useParams();
    const {document: tasks} = UserFetchParty("tasks", id);

    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");
    const [formError, setFormError] = useState("");

    useEffect(() => {
        if(tasks) {
            setDescription(tasks.description)
            setDate(tasks.date)
        }
    }, [tasks])

    const {user} = useAuthValue();
    const {updateDocument, response} = UserUpdateParty("tasks");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault()
        setFormError("");

        if(formError) return;

        const data = {
            description,
            date,
            uid: user.uid,
            createdBy: user.displayName
        };

        updateDocument(id, data);

        navigate("/tasks");
    }    

    return (
        <div className="create_forms">
            <h2>Editar Tarefa</h2>
            {<form onSubmit={handleSubmit}>
                <label>
                    <span>Descrição:*</span>
                    <textarea type="text"
                        name="description"
                        placeholder="Descrição da Tarefa"
                        required 
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}  
                    />
                </label>
                <label>
                    <span>Data de Criação</span>
                    <input type="date"
                        name="date"
                        placeholder="Insira a data que está criando sua tarefa"
                        onChange={(e) => setDate(e.target.value)}
                        value={date}  
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
            </form>}
        </div>
    );
};

export default EditTasks;