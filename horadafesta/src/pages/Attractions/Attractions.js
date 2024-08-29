import "../Contacts/Contacts.css";
import { Link } from "react-router-dom";

const Attractions = () => {
    return (
        <div className="create_contact">
            <h2>Atrações</h2>
            <p>Crie suas Atrações para que suas festas sejam inesquecíveis!</p>
            <Link to={"/attractions/create"}>
                <button className="btn">Criar</button>
            </Link>
        </div>
    );
};

export default Attractions;