import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import { travelers } from "../model/Data";

export default function TravelerInfo() {
    const { id } = useParams();
    console.log(id)

    const traveler = travelers.find((traveler) => traveler.id === parseInt(id));
    console.log(traveler)
    return (
        <div className="container mt-5">
            <div className="my-5 bg-light h4-1">
                <div key={traveler.id} className="list-grouh4-item d-flex justify-content-between">
                    <div className="my-2">
                        <h4>{traveler.name}</h4>
                        <h4>{traveler.surname}</h4>
                    </div>
                </div>
                <div>
                    <h4 className="my-1">Indirizzo e-mail: <strong>{traveler.email}</strong></h4>
                    <h4 className="my-1">Numero di telefono: <strong>{traveler.h4honeNumber}</strong></h4>
                </div>
                <div className="d-flex justify-content-around">
                    <Link to={`/`} className="btn btn-primary" >
                        Torna ai viaggi
                    </Link>
                    {/* <Link to={`/${id}`} className="btn btn-primary" >
                        Torna alla lista Viaggiatori
                    </Link> */} {/*non funziona ma il principio penso ci sia, da riguardare bene */}
                </div>
            </div>
        </div>
    )
}