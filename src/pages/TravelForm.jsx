import { useState, useEffect } from "react";
import { trips } from "../model/Data";

let newId = 0;
export default function TravelForm() {

    const newTravel = {
        id: newId,
        title: "",
        startDate: "",
        endDate: "",
        destination: "",
        travelers: [],
        bg: "",
    }
    const [travel, setTravel] = useState(newTravel)
    const [travelsList, setTravelsList] = useState([...trips]);

    newId = travelsList.reduce((curr, next) => curr.id < next.id ? next : curr).id + 1;

    function handleTravel(event) {
        const value = event.target.value;
        setTravel({ ...travel, [event.target.name]: value })
    }

    function handleSubmit(event) {
        event.preventDefault();

        setTravelsList(travelsList => [...travelsList, newTravel]);
        setTravel(newTravel);

    }

    function deleteTravel(id) {
        const travelsLeft = travelsList.filter((travel) => travel.id !== id);
        setTravelsList(travelsLeft)
    }


    return (
        <>
            <section className="my-5">
                <h2>Inserisci un nuovo viaggio</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-2">
                        <label htmlFor="title" className="form-label">
                            Nome del viaggio
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="title"
                            aria-describedby="titleHelp"
                            value={travel.title}
                            onChange={handleTravel}
                            name="title"
                            required
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="destination" className="form-label">
                            Destinazione del viaggio
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="destination"
                            aria-describedby="destinationHelp"
                            value={travel.destination}
                            onChange={handleTravel}
                            name="destination"
                            required
                        />
                    </div>
                    <div className="d-flex justify-content-between">
                        <div className="mb-2 w-50">
                            <label htmlFor="startDate" className="form-label">
                                Data di partenza
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="startDate"
                                aria-describedby="startDateHelp"
                                value={travel.startDate}
                                onChange={handleTravel}
                                name="startDate"
                                required
                            />
                        </div>
                        <div className="mb-2 w-50">
                            <label htmlFor="endDate" className="form-label">
                                Data di rientro
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="endDate"
                                aria-describedby="endDateHelp"
                                value={travel.endDate}
                                onChange={handleTravel}
                                name="endDate"
                                required
                            />
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary">
                        Pubblica
                    </button>
                </form>
            </section>
            {travelsList.map((travel, id) =>
                <div className="container my-3 bg-dark text-light py-2" key={id}>
                    <h3>{travel.title}</h3>
                    <p>{travel.destination}</p>
                    <p>{travel.startDate}</p>
                    <p>{travel.endDate}</p>
                    <div className="btn btn-danger"
                        onClick={() => { deleteTravel(travel.id) }}>Cancella</div>
                </div>
            )}
        </>
    )
}