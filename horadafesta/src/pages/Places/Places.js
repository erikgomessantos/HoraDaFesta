import "../Contacts/Contacts.css";
import { Link } from "react-router-dom";

const Places = () => {
    return (
        <div className="create_contact">
            <h2>Locais</h2>
            <p>Cadastre os locais preferidos para realizar sua festa!</p>
            <Link to={"/places/create"}>
                <button className="btn">Cadastrar</button>
            </Link>
        </div>
    );
};

export default Places;