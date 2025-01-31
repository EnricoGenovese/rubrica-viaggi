import React from "react";

export default function Travel({ selectedTrip }) {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Dettagli del Viaggio</h1>
      <div className="card shadow-sm">
        <div className="card-body">
          <h2 className="card-title">{selectedTrip.title}</h2>
          <p className="card-text">
            <strong>Data di Partenza:</strong> {selectedTrip.startDate}
            <br />
            <strong>Data di Fine:</strong> {selectedTrip.endDate}
            <br />
            <strong>Destinazione:</strong> {selectedTrip.destination}
          </p>
          <h3>Viaggiatori:</h3>
          <ul className="list-group">
            {selectedTrip.travelers.map((traveler) => (
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
