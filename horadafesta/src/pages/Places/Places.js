import "../Contacts/Contacts.css";
import { Link } from "react-router-dom";

import { UserFetchParties } from "../../hooks/UserFetchParties";
import { useAuthValue } from "../../context/AuthContext";

const Places = () => {
    const {user} = useAuthValue();
    const uid = user.uid;

    const {documents: places, loading} = UserFetchParties("places", null, uid);


    return (
        <div className="create_contact">
            <h2>Locais</h2>

            {loading && <p>Carregando...</p>}

            {places && places.map((places) => <p key={places.id} places={places}>
                <span>Nome:{places.name}</span>
                <span>Endereço:{places.address}</span>
                <span>Bairro:{places.neighbor}</span>
                <span>Número:{places.number}</span>
                <Link to={"/places/create"}>
                    <button className="btn">Cadastrar</button>
                </Link>
            </p>)}

            {places && places.length === 0 && (
                <div className="noparties">
                    <p>Ainda não foram cadastrados Locais</p>
                    <Link to="/places/create" className="btn">Cadastrar</Link>
                </div>
            )}

            {/* <p>Cadastre os locais preferidos para realizar sua festa!</p>
            <Link to={"/places/create"}>
                <button className="btn">Cadastrar</button>
            </Link> */}
        </div>
    );
};

export default Places;