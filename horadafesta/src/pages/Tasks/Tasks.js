import "../Contacts/Contacts.css";
import { Link } from "react-router-dom";

import { UserFetchParties } from "../../hooks/UserFetchParties";
import { useAuthValue } from "../../context/AuthContext";

// 09-09-2024
import { UserDeleteParty } from "../../hooks/UserDeleteParty";
// 09-09-2024

const Tasks = () => {
    const {user} = useAuthValue();
    const uid = user.uid;

    const {documents: tasks, loading} = UserFetchParties("tasks", null, uid);

    // 09-09-2024
    const {deleteDocument} = UserDeleteParty("tasks");
    // 09-09-2024

    return (
        <div className="create_contact">
            <h2>Tarefas</h2>
            <p>Crie suas tarefas para que não se esqueça de nada!</p>
            <Link to={"/tasks/create"}>
                <button className="btn">Criar</button>
            </Link>
            
            {loading && <p>Carregando...</p>}

            {tasks && tasks.map((tasks) => <p key={tasks.id} tasks={tasks} className="party_row">
                <span>Nome:{tasks.description}</span>
                <span>Data:{tasks.date}</span>
                <Link to={"/dashboard"} className="btn btn-outline">
                    Adicionar à Festa
                </Link>
                <Link to={`/tasks/edit/${tasks.id}`} className="btn btn-outline">
                    Editar
                </Link>
                <button onClick={() => deleteDocument(tasks.id)} className="btn btn-outline btn-danger">
                    Excluir
                </button>
            </p>)}

            {/* {tasks && tasks.length === 0 && (
                <div className="noparties">
                    <p>Ainda não foram criadas Tarefas</p>
                    <Link to="/tasks/create" className="btn">Cadastrar</Link>
                </div>
            )} */}

            {/* 
            <Link to={"/tasks/create"}>
                <button className="btn">Criar</button>
            </Link> */}
        </div>
    );
};

export default Tasks;