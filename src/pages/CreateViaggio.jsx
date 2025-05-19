import accompagnatori from "../data/accompagnatori";
import { useState } from "react";
import viaggi from "../data/viaggi";
const CreateViaggio = () => {

    const [newViaggio, setNewViaggio] = useState({
        id: '',
        localita: '',
        data_inizio: '',
        data_fine: '',
        accompagnatori: [],
        itinerario: '',
        posti_max: 15,
        image: ''
    });

    const [selectedOptions, setSelectedOptions] = useState([]);


    const accompagnatoriSelected = accompagnatori.filter(acc => selectedOptions.includes(acc.id.toString()));
    console.log(accompagnatoriSelected);
    console.log(selectedOptions);

    const handleChange = (e) => {
        const selected = Array.from(e.target.selectedOptions).map((opt) => opt.value);

        if (selected.length <= 2) {
            setSelectedOptions(selected);
        } else {
            e.target.selectedOptions[2].selected = false;
        }
    };

    const submitHandler = (e) => {
        e.preventDefault();
        setNewViaggio({
            id: viaggi.length + 1,
            localita: e.target.localita,
            data_inizio: e.target.data_inizio,
            data_fine: e.target.data_fine,
            accompagnatori: selectedOptions,
            itinerario: e.target.itinerario,
            posti_max: 15,
            image: e.target.image
        })
    }

    return <>
        <section>
            <form action="" onSubmit={submitHandler}>
                <div>
                    <label htmlFor="localita">Localita:</label>
                    <input type="text" name="localita" id="localita" />
                </div>
                <div>
                    <label htmlFor="data_inizio">Data inizio:</label>
                    <input type="date" name="data_inizio" id="data_inizio" />
                </div>
                <div>
                    <label htmlFor="data_fine">Data fine:</label>
                    <input type="date" name="data_fine" id="data_fine" />
                </div>
                <div>
                    <select name="accompagnatori" id="accompagnatori" multiple value={selectedOptions} onChange={handleChange}>
                        {accompagnatori.map((acc) => (<option key={acc.id} value={acc.id}>{acc.nome}</option>))}
                    </select>
                    <ul>
                        {accompagnatoriSelected.map(acc => (<li key={acc.id}>{acc.nome} {acc.cognome}</li>))}
                    </ul>
                </div>
                <div>
                    <label htmlFor="itinerario">Itinerario:</label>
                    <input type="text" name="itinerario" id="itinerario" />
                </div>
                <div>
                    <label htmlFor="image">image:</label>
                    <input type="file" name="image" id="image" />
                </div>
                <button type="submit">Invia</button>
            </form>
        </section>
    </>
}

export default CreateViaggio;