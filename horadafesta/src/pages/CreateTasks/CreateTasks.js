import "../Contacts/Contacts.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthValue } from "../../context/AuthContext";
import { UserInsert } from "../../hooks/UserInsert";

const CreateTasks = () => {
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");
    const [formError, setFormError] = useState("");
    
    const {user} = useAuthValue();
    const {insertDocument, response} = UserInsert("tasks");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
         e.preventDefault();
         setFormError("");

        // Verificar todos os valores
          if(formError) return;

        insertDocument({
        description,
        date,
        uid: user.uid,
        createdBy: user.displayName
   });

    //  Redirect to home
        navigate("/tasks");
    };
    
    return (
        <div className="create_contact">
            <h2>Criar Tarefa</h2>
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
                        required
                        onChange={(e) => setDate(e.target.value)}
                        value={date}  
                    />
                </label>
                {!response.loading && <button className="btn">Criar</button>}
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

export default CreateTasks;