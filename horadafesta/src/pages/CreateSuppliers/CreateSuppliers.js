import "../../App.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthValue } from "../../context/AuthContext";
import { UserInsert } from "../../hooks/UserInsert";

const CreateSuppliers = () => {
    const [name, setName] = useState("");
    const [cnpjorcpf, setCnpjOrCpf] = useState("");
    const [contact, setContact] = useState("");
    const [service, setService] = useState("");
    const [formError, setFormError] = useState("");
    
    const {user} = useAuthValue();
    const {insertDocument, response} = UserInsert("suppliers");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
         e.preventDefault();
         setFormError("");

        // Verificar todos os valores
          if(formError) return;

        insertDocument({
        name,
        cnpjorcpf,
        contact,
        service,
        uid: user.uid,
        createdBy: user.displayName
   });

    //  Redireciona para a home
        navigate("/suppliers");
    };
    
    return (
        <div className="create_forms">
            <h2>Cadastrar Fornecedor</h2>
            {<form onSubmit={handleSubmit}>
                <label>
                    <span>Nome do Fornecedor:*</span>
                    <input type="text"
                        name="name"
                        placeholder="Nome da Empresa ou Prestador de Serviço"
                        required 
                        onChange={(e) => setName(e.target.value)}
                        value={name}  
                    />
                </label>
                <label>
                    <span>CNPJ/CPF:*</span>
                    <input type="text"
                        name="cnpjorcpf"
                        placeholder="123.123.123-12 ou 12.123.123/1234-12"
                        required 
                        onChange={(e) => setCnpjOrCpf(e.target.value)}
                        value={cnpjorcpf}  
                    />
                </label>
                <label>
                    <span>Contato:*</span>
                    <input type="text"
                        name="contact"
                        placeholder="Nome do contato do fornecedor"
                        required 
                        onChange={(e) => setContact(e.target.value)}
                        value={contact}  
                    />
                </label>
                <label>
                    <span>Serviço:*</span>
                    <input type="text"
                        name="service"
                        placeholder="Tipo de serviço prestado"
                        required 
                        onChange={(e) => setService(e.target.value)}
                        value={service}  
                    />
                </label>
                {!response.loading && <button className="btn">Cadastrar</button>}
                {response.loading && (
                    <button className="btn" disabled>
                        Aguarde.. .
                    </button>
                )}
                {(response.error || formError) && (
                    <p className="error">{response.error || formError}</p>
                )}
            </form>}
        </div>
    );
};

export default CreateSuppliers;