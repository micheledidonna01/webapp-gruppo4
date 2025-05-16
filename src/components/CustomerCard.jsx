import { Link } from "react-router-dom";

function CustomerCard({data}) {
    const { id, nome, cognome} = data;

    return (
        <>
            <Link to={`clienti/${id}`} id={id} >
                <div>
                    <p>name: {nome}</p>
                    <p>cognome: {cognome}</p>
                    
                </div>
            </Link>
        <hr />
        </>
    )
}

export default CustomerCard;