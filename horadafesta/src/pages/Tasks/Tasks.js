import "../../App.css";
import "../Tasks/Tasks.css";
import { Link } from "react-router-dom";

import { UserFetchParties } from "../../hooks/UserFetchParties";
import { useAuthValue } from "../../context/AuthContext";

import { UserDeleteParty } from "../../hooks/UserDeleteParty";

const Tasks = () => {
    const {user} = useAuthValue();
    const uid = user.uid;

    const {documents: tasks, loading} = UserFetchParties("tasks", null, uid);

    const {deleteDocument} = UserDeleteParty("tasks");

    return (
        <div className="tasks cntr">
            <h2>Tarefas</h2>
            <p>Crie suas tarefas para que não se esqueça de nada!</p>
            <Link to={"/tasks/create"}>
                <button className="btn">Criar</button>
            </Link>
            
            {loading && <p>Carregando...</p>}

            <div className="tasks_header">   
                <div className="table_tasks">
                    <span>Descrição</span>
                    <span>Data</span>    
                </div>
                <div className="tasks_font-size">
                    <span>Ações</span>
                </div>    
            </div>

            {tasks && tasks.map((tasks) => <div key={tasks.id} tasks={tasks} className="tasks_row">
                
                <div className="table_tasks">
                    <p>{tasks.description}</p>
                    <p>{tasks.date}</p>
                </div>

                <div className="tasks_responsive">   
                    <Link to={"/dashboard"} className="tasks_btn tasks_btn-outline">
                        Adicionar à Festa
                    </Link>
                    <Link to={`/tasks/edit/${tasks.id}`} className="tasks_btn tasks_btn-outline">
                        Editar
                    </Link>
                    <button onClick={() => deleteDocument(tasks.id)} className="tasks_btn tasks_btn-outline tasks_btn-danger">
                        Excluir
                    </button>
                </div>    
            </div>)}
        </div>
    );
};

export default Tasks;