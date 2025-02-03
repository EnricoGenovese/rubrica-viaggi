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
            <div className="py-3 w-50 m-auto">
                <h3 className="d-none d-md-block">Lista Viaggiatori:</h3>
                {/* <Link to={"/"} className="btn btn-secondary">
                    Torna alla Home
                </Link> */}
                <Searchbar handleSearch={filterTravellers} />
            </div>
            <div className="d-flex justify-content-center">


                <ul className="list-group w-50">
                    {travelers.map((traveler, index) => {
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
                                    key={traveler.id}
                                    className="list-group-item d-flex justify-content-between align-items-center bg-light"
                                >
                                    <div className="d-flex flex-column flex-md-row w-100">
                                        <div className="w-25">
                                            <strong >
                                                {traveler.name}
                                            </strong></div>
                                        <div className="w-25">
                                            <strong>
                                                {traveler.surname}
                                            </strong></div>
                                    </div>
                                    <Link
                                        to={`${traveler.id}`}
                                        className="btn btn-dark btn-sm"
                                        style={{ backgroundColor: "#3FBCE7", height: "30px" }}
                                        traveler={traveler}
                                    >
                                        Dettagli
                                    </Link>
                                </li>
                            )
                        );
                    })}
                </ul>
            </div>
        </>
    );
}