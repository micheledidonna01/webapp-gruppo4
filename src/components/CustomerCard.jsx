import { useState } from "react";


function CustomerCard({ data }) {

    const { nome, cognome, email, cellulare, codice_fiscale, data_nascita } = data;
    const [isShow, setIsShow] = useState(false);

    function setShow() {
        setIsShow(!isShow);
    }

    return (
        <div>
            <div>
                <span>{nome} {cognome}</span>
                <button onClick={setShow}>Dettagli</button>
            </div>

            {isShow && <ul>
                <li>Data di nascita: {data_nascita}</li>
                <li>Cellulare: {cellulare}</li>
                <li>Email: {email}</li>
                <li>Codice Fiscale: {codice_fiscale}</li>
            </ul>}

        </div>
    )
}

export default CustomerCard;