import viaggi from "../data/viaggi";
import TravelCard from "../components/TravelCard";
const Viaggi = () => {


    return <>
        <section className="travels-container">

            <h1>Viaggi:</h1>


            <div className="card-container">


                <form className="search-box">
                    <label htmlFor="search">Cerca viaggi:</label>
                    <input type="text" id="search" />
                </form>

                <div className="travels">
                    {viaggi?.map(viaggio => <TravelCard key={viaggio.id} data={viaggio} />)}
                </div>
            </div>

        </section>
    </>
}

export default Viaggi;