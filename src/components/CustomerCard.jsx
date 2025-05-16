function CustomerCard({ id, nome, cognome, email, cellulare, codice_fiscale, data_nascita }) {
    return (
        <div>
            <div>
                <span>{nome}</span>
                <span>{cognome}</span>
            </div>
        </div>
    )
}

export default CustomerCard;