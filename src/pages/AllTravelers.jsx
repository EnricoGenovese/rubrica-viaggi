import { useState } from "react";
import { Link } from "react-router-dom";
import { travelers } from "../model/Data";
import Searchbar from "../components/Searchbar";

export default function AllTravelers() {
    const [query, setQuery] = useState("");

    function filterTravellers(e) {
        setQuery(e.target.value);
    }
    return (
        <>
            <div className="py-3 d-flex justify-content-between">
                <h3>Viaggiatori:</h3>
                <Link to={"/"} className="btn btn-secondary">
                    Torna alla Home
                </Link>
                <Searchbar handleSearch={filterTravellers} />
            </div>
            <ul className="list-group d-flex justify-content-between">
                {travelers.map((traveler) => {
                    const nameSurname = traveler.name + " " + traveler.surname;
                    const surnameName = traveler.surname + " " + traveler.name;
                    return (
                        (nameSurname
                            .toLowerCase()
                            .trim()
                            .includes(query.toLowerCase().trim()) ||
                            surnameName
                                .toLowerCase()
                                .trim()
                                .includes(query.toLowerCase().trim()) ||
                            !query) && traveler.name && (
                            <li
                                key={traveler?.id}
                                className="list-group-item d-flex justify-content-between"
                            >
                                <div>
                                    <strong>
                                        {traveler.surname}
                                    </strong>
                                </div>
                                <div>
                                    <strong>
                                        {traveler.name}
                                    </strong>
                                </div>

                                <div>
                                    Indirizzo e-mail: {traveler.email}
                                </div>
                                <div>
                                    Numero di telefono: {traveler.phoneNumber}
                                </div>
                            </li>
                        )
                    );
                })}
            </ul>
        </>
    );
}