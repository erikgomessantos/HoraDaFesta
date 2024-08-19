import "../Home/Home.css";

// Hooks
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";


const Home = () => {
    const [parties] = useState([]);

    return (
        <div className="home">
            <h2>Veja suas festas</h2>
            <div>
                <h2>Festas...</h2>
                {parties && parties.length === 0 && (
                    <div className="noparties">
                        <p>Ainda não foram criadas Festas</p>
                        <Link to="/parties/create" className="btn">Criar sua primeira Festa</Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Home;