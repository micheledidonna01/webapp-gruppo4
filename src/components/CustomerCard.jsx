
import { useState } from "react";


function CustomerCard({ data }) {

    const { nome, cognome, email, cellulare, codice_fiscale, data_nascita } = data;
    const [isShow, setIsShow] = useState(false);

    function setShow() {
        setIsShow(!isShow);
    }

    return (


        <>
            <div className="user-details">
                <span>{nome} {cognome}</span>
                <button className="btn-details" onClick={setShow}>Dettagli</button>

            </div>

            {isShow && <ul className="user-data">
                <li><strong>Data di nascita:</strong> {data_nascita}</li>
                <li><strong>Cellulare:</strong> {cellulare}</li>
                <li><strong>Email:</strong> {email}</li>
                <li><strong>Codice Fiscale:</strong> {codice_fiscale}</li>
            </ul>}

        </>
    )
}

export default CustomerCard;