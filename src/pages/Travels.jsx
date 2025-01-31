import { trips } from "../model/Data.js";
import { Link } from "react-router-dom"

export default function Travels() {
    return (
        <>
            <div className="container">
                {trips.map((trip) => (
                    <div className="my-5" key={trip.id} >
                        <div className="my-1">
                            <h2>{trip.title}</h2>
                        </div>
                        <div className="d-flex flex-direction-column justify-content-around my-1">
                            <p>Data della partenza: {trip.startDate}</p>
                            <p>Data di ritorno: {trip.endDate}</p>
                        </div>
                        <div className="my-1">
                            <h3> {trip.destination}</h3>
                            <Link to={`/${trip.id}`} className="btn btn-primary" >
                                Vai al viaggio
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}