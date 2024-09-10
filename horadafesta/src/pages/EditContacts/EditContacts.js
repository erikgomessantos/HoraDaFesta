import "../EditParty/EditParty.css";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuthValue } from "../../context/AuthContext";
import { UserUpdateParty } from "../../hooks/UserUpdateParty";
import { UserFetchParty } from "../../hooks/UserFetchParty";

// 05-09-2024
import { UserFetchParties } from "../../hooks/UserFetchParties";
// 05-09-2024


const EditParty = () => {
    const {id} = useParams();
    const {document: party} = UserFetchParty("parties", id);

    // 05-09-2024
    const {documents: contacts} = UserFetchParties("contacts", null);
    // 05-09-2024

    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    
    //04-09-2024
    const [name, setName] = useState("");
    const [attractionsName, setAttractionsName] = useState("");
    const [tasksDescription, setTasksDescription] = useState("");
    const [places, setPlaces] = useState("");
    const [suppliers, setSuppliers] = useState("");
    //04-09-2024

    const [formError, setFormError] = useState("");

    useEffect(() => {
        if(party) {

            setTitle(party.title)
            setImage(party.image)
            
            //04-09-2024
            setName(party.name)
            setAttractionsName(party.attractionsName)
            setTasksDescription(party.tasksDescription)
            setPlaces(party.places)
            setSuppliers(party.suppliers)
            //04-09-2024
        }
    }, [party])
    
    const {user} = useAuthValue();
    const {updateDocument, response} = UserUpdateParty("parties");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormError("");

        // URL Validation
        try {

            new URL(image)

        } catch (error) {
            
            setFormError("A imagem precisa ser uma URL.")
        };

        // Verificar todos os valores
        if(formError) return;

        const data = {
            title,
            image,
            
            // 04-09-2024
            name,
            attractionsName,
            tasksDescription,
            places,
            suppliers,
            // 04-09-2024

            uid: user.uid,
            createdBy: user.displayName
        };
        
       updateDocument(id, data);

        // Redirect to home
        navigate("/dashboard");
    };

    // 05-09-2024
    // const [options] = useState([""]);
    // 05-09-2024
    
    return (
        <div className="edit_party">
            {party && (
                <>
                    <h2>Editar Festa</h2>
                    <p>Altere as informações das suas festas da forma que preferir!</p>
                    <form onSubmit={handleSubmit}>
                        <label>
                            <span>Título:*</span>
                            <input type="text"
                                name="title"
                                placeholder="Título da sua Festa"
                                required 
                                onChange={(e) => setTitle(e.target.value)}
                                value={title}  
                            />
                        </label>
                        <label>
                            <span>URL da Imagem:*</span>
                            <input type="text"
                                name="image"
                                placeholder="Insira o endereço da imagem que tem a sua festa"
                                required 
                                onChange={(e) => setImage(e.target.value)}
                                value={image}  
                            />
                        </label>
                        <p className="title_preview">Imagem atual:</p>
                        <img
                         className="image_preview"
                         src={party.image}
                         alt={party.title}
                        />
                        
                        {/* 04-09-2024 */}
                        {/* <label>
                            <span>Nome do Contato:</span>
                            <input type="text"
                                name="name"
                                placeholder="Informe o nome do seu contato"
                                onChange={(e) => setName(e.target.value)}
                                value={name}  
                            />
                        </label> */}

                        {/* 05-09-2024 */}
                        {/* {contacts && contacts.map((contacts) => <p key={contacts.id} contacts={contacts}>
                        <select>
                            <option>Selecione os Contatos</option>
                                {options.map(option => (
                                <option key={contacts.id} value={contacts.name}>
                                    {contacts.name}
                                </option>
                            ))}
                        </select>
                        </p>)}     */}
                        
                        <select 
                        name="name"
                        multiple={false}
                        onChange={(e) => setName(e.target.value)}
                        // value={[name]}
                        >
                            <option>Selecione os Contatos</option>
                            {contacts.map((contacts, i) => {
                                return <option key={i}>{contacts.name}</option>
                            })}
                        </select>

                        
                        {/* 05-09-2024 */}

                        <label>
                            <span>Atrações:</span>
                            <input type="text"
                                name="attractionsName"
                                placeholder="Descreva suas atrações"
                                onChange={(e) => setAttractionsName(e.target.value)}
                                value={attractionsName}  
                            />
                        </label>

                        <label>
                            <span>Tarefas:</span>
                            <input type="text"
                                name="tasksDescription"
                                placeholder="Descreva suas tarefas para que não esqueça de nada"
                                onChange={(e) => setTasksDescription(e.target.value)}
                                value={tasksDescription}  
                            />
                        </label>

                        <label>
                            <span>Locais:</span>
                            <input type="text"
                                name="places"
                                placeholder="Cadastre seus lugares favoritos para comemorar suas festas"
                                onChange={(e) => setPlaces(e.target.value)}
                                value={places}  
                            />
                        </label>

                        <label>
                            <span>Fornecedores:</span>
                            <input type="text"
                                name="suppliers"
                                placeholder="Cadastre seus fornecedores"
                                onChange={(e) => setSuppliers(e.target.value)}
                                value={suppliers}  
                            />
                        </label>
                        {/* 04-09-2024 */}

                        {!response.loading && <button className="btn">Editar</button>}
                        {response.loading && (
                            <button className="btn" disabled>
                                Aguarde.. .
                            </button>
                        )}
                        {(response.error || formError) && (
                            <p className="error">{response.error || formError}</p>
                        )}
                    </form>
                </>
            )}
        </div>
    );
};

export default EditParty;