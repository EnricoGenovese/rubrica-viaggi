import React from "react";
import { trips } from "../model/Data.js";
import { Link, useParams } from "react-router-dom";

export default function Travel() {
  const { id } = useParams();
  const currentTrip = trips.find((trip) => trip.id == id);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Dettagli del Viaggio</h1>
      <div className="card shadow-sm">
        <div
          className="card-body"
          style={{
            backgroundImage: currentTrip.bg,
            backgroundSize: "cover",
            backgroundPosition: "center",
            color: "white",
            height: "80vh",
            opacity: "0.8",
          }}
        >
          <h2 className="card-title">{currentTrip.title}</h2>
          <p className="card-text">
            <strong>Data di Partenza:</strong> {currentTrip.startDate}
            <br />
            <strong>Data di Fine:</strong> {currentTrip.endDate}
            <br />
            <strong>Destinazione:</strong> {currentTrip.destination}
          </p>
          <h3>Viaggiatori:</h3>
          <ul className="list-group">
            {currentTrip.travelers.map((traveler) => (
              <li key={traveler.id} className=" d-flex justify-content-between">
                <div>
                  <strong>
                    {traveler.name} {traveler.surname}
                  </strong>
                </div>
                <Link
                  to={`${traveler.id}`}
                  className="btn btn-sm btn-secondary"
                  traveler={traveler}
                >
                  Dettagli Viaggiatore
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
