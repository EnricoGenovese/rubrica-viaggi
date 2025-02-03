import React from "react";
import { trips, travelers } from "../model/Data.js";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Searchbar from "../components/Searchbar.jsx";


export default function Travel() {
  const { id } = useParams();
  const currentTrip = trips.find((trip) => trip.id === parseInt(id));
  const [query, setQuery] = useState("");
  const { name, surname } = travelers;
  function filterTravellers(e) {

    setQuery(e.target.value);
  }

  return (

    <div className="container mt-5">
      <h1 className="text-center mb-4">Dettagli del Viaggio</h1>
      <div className="card shadow-sm">
        <div className="card-body">
          <h2 className="card-title">{currentTrip.title}</h2>
          <p className="card-text">
            <strong>Data di Partenza:</strong> {currentTrip.startDate}
            <br />
            <strong>Data di Fine:</strong> {currentTrip.endDate}
            <br />
            <strong>Destinazione:</strong> {currentTrip.destination}
          </p>
          <div className=" py-3 d-flex justify-content-between">
            <h3>Viaggiatori:</h3>
            <Searchbar handleSearch={filterTravellers} />
          </div>
          <ul className="list-group">

            {currentTrip.travelers.map((traveler) => {

              const nameSurname = traveler.name + " " + traveler.surname;
              const surnameName = traveler.surname + " " + traveler.name;
              console.log(nameSurname)
              return (

                (nameSurname.toLowerCase().trim().includes(query.toLowerCase().trim()) || surnameName.toLowerCase().trim().includes(query.toLowerCase().trim()) || !query) &&
                < li key={traveler.id} className="list-group-item d-flex justify-content-between">
                  <div>
                    <strong>
                      {traveler.name} {traveler.surname}
                    </strong>
                  </div>
                  <Link to={`${traveler.id}`} className="btn btn-primary" traveler={traveler} >
                    Dettagli Viaggiatore
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div >
  );
}
