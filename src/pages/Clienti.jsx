import clienti from "../data/clienti";

const Clienti = ()=>{

    return <>
        {clienti.map(cliente => <div key={cliente.id}>
            <p>nome: {cliente.nome}</p>
            <p>cognome: {cliente.cognome}</p>
            <p>email: {cliente.email}</p>
            <p>codice fiscale: {cliente.codice_fiscale}</p>
            <p>cellulare: {cliente.cellulare}</p>
            <p>data di nascita: {cliente.data_nascita}</p>
        <hr />
        </div>)}
        
    </>
}

export default Clienti;