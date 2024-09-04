import "../Contacts/Contacts.css";
import { Link } from "react-router-dom";

import { UserFetchParties } from "../../hooks/UserFetchParties";
import { useAuthValue } from "../../context/AuthContext";

const Tasks = () => {
    const {user} = useAuthValue();
    const uid = user.uid;

    const {documents: tasks, loading} = UserFetchParties("tasks", null, uid);


    return (
        <div className="create_contact">
            <h2>Tarefas</h2>
            <p>Crie suas tarefas para que não se esqueça de nada!</p>
            <Link to={"/tasks/create"}>
                <button className="btn">Criar</button>
            </Link>
            
            {loading && <p>Carregando...</p>}

            {tasks && tasks.map((tasks) => <p key={tasks.id} tasks={tasks}>
                <span>Nome:{tasks.description}</span>
                <span>Data:{tasks.date}</span>
                <Link to={"/dashboard"}>
                    <button className="btn">Adicionar à Festa</button>
                </Link>
            </p>)}

            {tasks && tasks.length === 0 && (
                <div className="noparties">
                    <p>Ainda não foram criadas Tarefas</p>
                    <Link to="/tasks/create" className="btn">Cadastrar</Link>
                </div>
            )}

            {/* 
            <Link to={"/tasks/create"}>
                <button className="btn">Criar</button>
            </Link> */}
        </div>
    );
};

export default Tasks;