import viaggi from "../data/viaggi";
import TravelCard from "../components/TravelCard";
import { useState } from "react";
import { Link } from "react-router-dom";
const Viaggi = () => {
    const [search, setSearch] = useState("");
    const viaggiFiltrati = viaggi.filter(v =>
        v.localita?.toLowerCase().includes(search.toLowerCase())
    );
    return <>
        <div className="">
            <Link to="/create">Crea nuovo viaggio</Link>
        </div>
        <section className="travels-container">
            <div className="search-travel">
                <h1>Viaggi:</h1>

                <div>
                    <input
                        type="text"
                        id="search"
                        placeholder="Cerca viaggi..."
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                    />
                </div>
            </div>

            <div className="card-container">
                {viaggiFiltrati.map(viaggio => (
                    <TravelCard key={viaggio.id} data={viaggio} />
                ))}

            </div>

        </section>
    </>
}

export default Viaggi;