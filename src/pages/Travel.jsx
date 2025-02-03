import React, { useState } from "react";
import { trips } from "../model/Data.js";
import { Link, useParams } from "react-router-dom";
import Searchbar from "../components/Searchbar.jsx";

export default function Travel() {
  const { id } = useParams();
  const currentTrip = trips.find((trip) => trip.id === parseInt(id));

  if (!currentTrip) {
    return (
      <p className="text-center mt-5 text-danger fs-1">Viaggio non trovato.</p>
    );
  }

  const [query, setQuery] = useState("");

  function filterTravellers(e) {
    setQuery(e.target.value);
  }

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4 fw-bold">Dettagli del Viaggio</h1>
      <div className="card shadow-sm">
        <div
          className="card-body"
          style={{
            position: "relative",
            backgroundImage: currentTrip.bg,
            backgroundSize: "cover",
            backgroundPosition: "center",
            color: "white",
            height: "80vh",
            borderRadius: "10px",
          }}
        >
          {/* Overlay scuro trasparente */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              borderRadius: "10px",
              zIndex: 1,
            }}
          ></div>

          {/* Contenuto sopra overlay */}
          <div style={{ position: "relative", zIndex: 2, padding: "10px" }}>
            <h2 className="card-title fw-bold">{currentTrip.title}</h2>
            <p className="card-text">
              <strong>Data di Partenza:</strong> {currentTrip.startDate}
              <br />
              <strong>Data di Fine:</strong> {currentTrip.endDate}
              <br />
              <strong>Destinazione:</strong> {currentTrip.destination}
            </p>
            <div className="pb-3">

              <Searchbar handleSearch={filterTravellers} />
            </div>
            <h3>Viaggiatori:</h3>

            <ul className="list-unstyled">
              {currentTrip.travelers
                .filter((traveler) => {
                  const nameSurname = traveler.name + " " + traveler.surname;
                  const surnameName = traveler.surname + " " + traveler.name;
                  return (
                    nameSurname.toLowerCase().includes(query.toLowerCase()) ||
                    surnameName.toLowerCase().includes(query.toLowerCase()) ||
                    query.trim() === ""
                  );
                })
                .map((traveler) => (
                  <li
                    key={traveler.id}
                    className="list-group-item d-flex justify-content-between align-items-center py-3 "
                    style={{ borderBottom: "1px solid white" }}
                  >
                    <strong>
                      {traveler.name} {traveler.surname}
                    </strong>
                    <Link to={`${traveler.id}`} className="btn btn-dark btn-sm">
                      Dettagli Viaggiatore
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
