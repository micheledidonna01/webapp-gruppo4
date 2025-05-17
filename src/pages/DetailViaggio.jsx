import { useParams } from "react-router-dom";
import { useState } from "react";
import viaggi from "../data/viaggi";
import clienti from "../data/clienti";
import CustomerCard from "../components/CustomerCard";

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

    if (!viaggio) return <p>Viaggio non trovato.</p>;

    return <>
        <div>
            <h3>{viaggio.localita}</h3>
            <span>Dal <strong>{viaggio.data_inizio}</strong> al <strong>{viaggio.data_fine}</strong></span>
        </div>

        <h3>Viaggiatori:</h3>
        <p style={{ color: clientiViaggio.length >= viaggio.posti_max ? "red" : "green" }}>
            Partecipanti: {clientiViaggio.length} / {viaggio.posti_max}
        </p>

        <input
            type="text"
            placeholder="Cerca per nome o cognome"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
        />

        <ul className="partecipanti">
            {clientiFiltrati.map((cliente) => (
                <li key={cliente.id}><CustomerCard data={cliente} /></li>
            ))}
        </ul>

    </>;
};

export default DetailViaggio;