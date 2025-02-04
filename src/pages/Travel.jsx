import React, { useState } from "react";
import { trips, travelers } from "../model/Data.js";
import { Link, useParams } from "react-router-dom";
import Searchbar from "../components/Searchbar.jsx";


export default function Travel() {



  const newTraveler = {

    id: 0,
    name: "",
    surname: "",
    email: "",
    phoneNumber: "",
    ssn: ""
  }

  console.log(travelers);

  const [traveler, setTraveler] = useState(newTraveler)
  const [travelersList, setTravelersList] = useState([...travelers])




  traveler.id = travelersList.reduce((curr, next) => curr.id < next.id ? next : curr).id + 1;

  function handleSubmit(e) {
    e.preventDefault();
    setTravelersList(travelersList => [...travelersList, traveler])
    console.log(travelersList)
    addTraveler();
    setTraveler(newTraveler)
  }

  function handleInput(e) {
    const value = e.target.value;
    setTraveler({ ...traveler, [e.target.name]: value })
  }

  function addTraveler() {
    setCurrentTrip({
      ...currentTrip,
      travelers: { ...currentTrip.travelers, [traveler.id]: traveler }
    })
    return (currentTrip);
  }


  const { id } = useParams();
  const [currentTrip, setCurrentTrip] = useState(trips.find((trip) => trip.id === parseInt(id)));
  console.log(currentTrip)
  const travelersArray = Object.values(currentTrip.travelers);



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
    <>
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

              <div className="d-flex gap-2 my-2 justify-content-md-end">

                <a href="#form" className="btn btn-dark btn-sm" style={{ height: "30px" }}>Aggiungi Viaggiatore</a>


                <Link to={`/`} className="btn btn-dark btn-sm" style={{ height: "30px" }}>
                  Torna alla Home Page
                </Link>
              </div>
              <h3 className="text-center text-md-start">Viaggiatori:</h3>

              <ul className="list-unstyled">
                {travelersArray
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
      </div >
      <div
        className="my-5 p-4 container"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      >
        <form id="form" onSubmit={handleSubmit}>
          <div className="form-group text-white py-2">
            <label forhtml="nome">Nome</label>
            <input type="text" className="form-control" id="nome" aria-describedby="nome" placeholder="Inserisci il nome" name="name" value={traveler.name} onChange={handleInput} />
          </div>
          <div className="form-group text-white py-2">
            <label forhtml="Cognome">Cognome</label>
            <input type="text" className="form-control" id="Cognome" placeholder="Inserisci il cognome" name="surname" value={traveler.surname} onChange={handleInput} />
          </div>
          <div className="form-group text-white py-2">
            <label forhtml="email">Indirizzo email</label>
            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Inserisci l'email" name="email" value={traveler.email} onChange={handleInput} />
          </div>
          <div className="form-group text-white py-2">
            <label forhtml="Codicefiscale">Numero di telefono</label>
            <input type="text" className="form-control" id="NumeroDiTelefono" placeholder="Inserisci numero di telefono" name="phoneNumber" value={traveler.phoneNumber} onChange={handleInput} />
          </div>
          <div className="form-group text-white py-2">
            <label forhtml="Codicefiscale">Codice fiscale</label>
            <input type="text" className="form-control" id="Codicefiscale" placeholder="Inserisci codice fiscale" name="ssn" value={traveler.ssn} onChange={handleInput} />
          </div>
          <div className="d-flex justify-content-center mt-3">
            <button type="submit" className="btn btn-dark btn-sm">Aggiungi partecipante</button>
          </div>
        </form>
      </div>
    </>
  );
}
