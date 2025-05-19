import { useParams } from "react-router-dom";
import { useState } from "react";
import viaggi from "../data/viaggi";
import clienti from "../data/clienti";
import CustomerCard from "../components/CustomerCard";
import { useNavigate } from "react-router-dom";

const DetailViaggio = () => {
    const { id } = useParams();
    const idNum = parseInt(id);
    const [searchTerm, setSearchTerm] = useState("");
    const viaggio = viaggi.find(v => v.id === idNum);
    const clientiViaggio = clienti.filter(cliente => cliente.id_viaggio === idNum);
    const clientiFiltrati = clientiViaggio.filter(cliente => {
        const fullName = `${cliente.nome} ${cliente.cognome}`.toLowerCase();
        return fullName.includes(searchTerm.toLowerCase());
    });

    let navigate = useNavigate()

    if (!viaggio) return <p>Viaggio non trovato.</p>;

    function showForm() {
        document.getElementById("formPartecipanti").style.display = "block";
    }
    function hideForm() {
        document.getElementById("formPartecipanti").style.display = "none";
    }

    const [newCustomer, setNewCustomer] = useState({
        id: '',
        nome: "",
        cognome: "",
        email: "",
        cellulare: "",
        codice_fiscale: "",
        data_nascita: "",
        id_viaggio: parseInt(id)
    });
    const handleChange = (e) => {
        e.preventDefault();
        let { name, value } = e.target
        setNewCustomer((newCustomer) => ({
            ...newCustomer,
            id: clienti.length + 1,
            [name]: value
        }));
        console.log(newCustomer);
    };

    function handleSubmit(e) {
        e.preventDefault();
        console.log('Nuovo partecipante salvato!');
        console.log(newCustomer);
        clienti.push(newCustomer);
        console.log(clienti);
    }

    return <div className="details-container">
        <div className="travel-data">
            <div className="travel-title">
                <h3>{viaggio.localita}</h3>
                <span>Dal <strong>{viaggio.data_inizio}</strong> al <strong>{viaggio.data_fine}</strong></span>
            </div>

            <div className="travellers-section">
                <h3>Viaggiatori:</h3>

                <input
                    type="text"
                    placeholder="Cerca partecipante..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            <p className={clientiViaggio.length >= viaggio.posti_max ? "text-red bg-red" : "text-green bg-green"}>
                Partecipanti: {clientiViaggio.length} / {viaggio.posti_max}
            </p>
            <button onClick={showForm}>Aggiungi partecipante</button>
            <div id="formPartecipanti" style={{ display: "none" }}>
                <form action="" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="nome">Nome:</label>
                        <input type="text" name="nome" id="nome" value={newCustomer.nome} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="cognome">Cognome:</label>
                        <input type="text" name="cognome" id="cognome" value={newCustomer.cognome} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="text" name="email" id="email" value={newCustomer.email} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="cellulare">Cellulare:</label>
                        <input type="text" name="cellulare" id="cellulare" value={newCustomer.cellulare} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="codice_fiscale">Codice Fiscale:</label>
                        <input type="text" name="codice_fiscale" id="codice_fiscale" value={newCustomer.codice_fiscale} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="data_nascita">Data di nascita:</label>
                        <input type="date" name="data_nascita" id="data_nascita" value={newCustomer.data_nascita} onChange={handleChange} />
                    </div>
                    <button type="submit">Aggiungi partecipante</button>
                    <button onClick={hideForm}>Chiudi</button>
                </form>
            </div>
        </div>


        <ul className="users-list">

            {clientiFiltrati.map((cliente) => (
                <li key={cliente.id}><CustomerCard data={cliente} /></li>
            ))}
        </ul>

        <button className="btn-details" onClick={() => navigate(-1)}>Torna alla Home</button>

    </div>;
};


export default DetailViaggio;