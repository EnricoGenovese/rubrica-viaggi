import React from "react";
import { trips } from "../model/data";
import { useParams } from "react-router-dom";

export default function Travel() {
  console.log(trips);
  const { id } = useParams();
  console.log(id);

  const currentTrip = trips.find((trip) => trip.id === id);
  console.log(currentTrip);

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
          <h3>Viaggiatori:</h3>
          <ul className="list-group">
            {currentTrip.travelers.map((traveler) => (
              <li key={traveler.id} className="list-group-item">
                <div>
                  <strong>
                    {traveler.name} {traveler.surname}
                  </strong>
                </div>
                <div>Email: {traveler.email}</div>
                <div>Telefono: {traveler.phoneNumber}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
