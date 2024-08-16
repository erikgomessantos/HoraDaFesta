import "../Party/Party.css";
import { Link } from "react-router-dom";

const Party = () => {
    return (
        <div className="party">
      <h1>
        Festas
      </h1>
      <p>
        Aqui você pode consultar as suas festas. Caso não tenha nenhuma, basta clicar no botão abaixo.
      </p>
      <Link to="/parties/create" className="btn">
        Criar Festa
      </Link>
    </div>
    );
};

export default Party;
