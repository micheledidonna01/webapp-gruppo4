import { useParams } from "react-router-dom";
import clienti from "../data/clienti";

const ListClienti = () => {

    const {id} = useParams();
    console.log(id);
    const clienteSelezionato = clienti.find(cliente => cliente.id === parseInt(id));
    console.log(clienteSelezionato);
    
    return <>
        <p>nome: {clienteSelezionato.nome}</p>
        <p>cognome: {clienteSelezionato.cognome}</p>
        <p>email: {clienteSelezionato.email}</p>
        <p>codice fiscale: {clienteSelezionato.codice_fiscale}</p>
        <p>cellulare: {clienteSelezionato.cellulare}</p>
        <p>data di nascita: {clienteSelezionato.data_nascita}</p>
    </>
}

export default ListClienti;