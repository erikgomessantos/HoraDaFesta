import "../Contacts/Contacts.css";
import { Link } from "react-router-dom";

const Tasks = () => {
    return (
        <div className="create_contact">
            <h2>Tarefas</h2>
            <p>Crie suas tarefas para que não se esqueça de nada!</p>
            <Link to={"/tasks/create"}>
                <button className="btn">Criar</button>
            </Link>
        </div>
    );
};

export default Tasks;