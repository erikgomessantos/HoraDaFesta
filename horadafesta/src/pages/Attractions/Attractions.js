import "../Contacts/Contacts.css";
import { Link } from "react-router-dom";

import { UserFetchParties } from "../../hooks/UserFetchParties";
import { useAuthValue } from "../../context/AuthContext";

const Attractions = () => {
    const {user} = useAuthValue();
    const uid = user.uid;

    const {documents: attractions, loading} = UserFetchParties("attractions", null, uid);


    return (
        <div className="create_contact">
            <h2>Atrações</h2>
            {loading && <p>Carregando...</p>}
            {attractions && attractions.map((attractions) => <p key={attractions.id} attractions={attractions}>
                <span>Nome:{attractions.name}</span>
                <span>Descrição:{attractions.description}</span>
                <Link to={"/attractions/create"}>
                    <button className="btn">Criar</button>
                </Link>
            </p>)}
            {attractions && attractions.length === 0 && (
                <div className="noparties">
                    <p>Ainda não foram criadas Atrações</p>
                    <Link to="/attractions/create" className="btn">Criar</Link>
                </div>
            )}

            {/* <p>Crie suas Atrações para que suas festas sejam inesquecíveis!</p>
            <Link to={"/attractions/create"}>
                <button className="btn">Criar</button>
            </Link> */}
        </div>
    );
};

export default Attractions;