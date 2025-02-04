import { useState } from "react";
import { trips } from "../model/Data.js";
import { Link } from "react-router-dom";

export default function Travels() {

  const newTravel = {
    id: 0,
    title: "",
    startDate: "",
    endDate: "",
    destination: "",
    travelers: [],
    bg: "",
  };

  const [travel, setTravel] = useState(newTravel);
  const [travelsList, setTravelsList] = useState(trips);

  let today = new Date();
  const dd = today.getDate();
  const mm = today.getMonth() + 1;
  const year = today.getFullYear();
  today = year + "-" + ("0" + mm).slice(-2) + "-" + ("0" + dd).slice(-2);

  const ongoingTrips = travelsList.filter((trip) => trip.startDate < today);
  const futureTrips = travelsList.filter((trip) => trip.startDate > today);

  newTravel.id = travelsList.reduce((curr, next) => curr.id < next.id ? next : curr).id + 1;

  function handleTravel(event) {
    const value = event.target.value;
    setTravel({ ...travel, [event.target.name]: value });
    console.log(travel);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (travel.startDate > travel.endDate) {
      return;
    } else {
      setTravelsList((travelsList) => [...travelsList, travel]);
      setTravel(newTravel);
    }
    console.log(travelsList);
  }

  function deleteTravel(id) {
    const travelsLeft = travelsList.filter((travel) => travel.id !== id);
    setTravelsList(travelsLeft);
  }

  if (ongoingTrips.length == 0 && futureTrips.length == 0) {
    return (
      <p className="text-center mt-5 text-danger fs-1">
        Nessun viaggio trovato.
      </p>
    );
  }

  return (
    <>
      <div className="d-flex align-items-center justify-content-center my-3">
        <Link to={"/alltravelers"} className="btn btn-dark">
          Lista completa dei viaggiatori
        </Link>
      </div>
      <div className="container mt-5">
        <div className="p-2">
          <h2 className="fw-bold">Viaggi in corso: </h2>
        </div>
        {ongoingTrips.map((trip) => (
          <div
            className="my-5 bg-light p-3"
            key={trip.id}
            style={{
              position: "relative",
              backgroundImage: trip.bg,
              backgroundSize: "cover",
              backgroundPosition: "center",
              color: "white",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(0, 0, 0, 0.5)", // Overlay nero con opacità
                zIndex: 1,
              }}
            ></div>
            <div style={{ position: "relative", zIndex: 2 }}>
              <div className="my-2">
                <h2 className="fw-bold">{trip.title}</h2>
              </div>
              <div className="d-flex justify-content-between flex-md-column my-2">
                <p className="w-50 text-center text-md-start">
                  Data della partenza:
                  <br /> {trip.startDate}
                </p>
                <p className="w-50 text-center text-md-start">
                  Data di ritorno:
                  <br /> {trip.endDate}
                </p>
              </div>
              <div className="my-2 d-flex justify-content-between">
                <h3>{trip.destination}</h3>
                <Link to={`/${trip.id}`} className="btn btn-dark btn-sm d-flex align-self-center">
                  Dettagli
                </Link>
                <div className="btn btn-danger btn-sm d-flex align-self-center"
                  onClick={() => { deleteTravel(travel.id) }}>
                  Cancella
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="p-2">
          <h2 className="fw-bold">Viaggi futuri: </h2>
        </div>
        {futureTrips.map((trip) => (
          <div
            className="my-5 bg-light p-3"
            key={trip.id}
            style={{
              position: "relative",
              backgroundImage: trip.bg,
              backgroundSize: "cover",
              backgroundPosition: "center",
              color: "white",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                zIndex: 22,
              }}
            ></div>
            <div style={{ position: "relative", zIndex: 222 }}>
              <div className="my-2">
                <h2 className="fw-bold">{trip.title}</h2>
              </div>
              <div className="d-flex justify-content-between flex-md-column my-2">
                <p className="w-50 text-center text-md-start">
                  Data della partenza:
                  <br /> {trip.startDate}
                </p>
                <p className="w-50 text-center text-md-start">
                  Data di ritorno:
                  <br /> {trip.endDate}
                </p>
              </div>

              {/* <div className="d-flex flex-direction-column justify-content-around my-2">
            
              </div> */}
              <div className="my-2 d-flex justify-content-between">
                <h3>{trip.destination}</h3>
                <Link to={`/${trip.id}`} className="btn btn-sm btn-dark d-flex align-self-center">
                  Dettagli
                </Link>
                <div className="btn btn-danger btn-sm d-flex align-self-center"
                  onClick={() => { deleteTravel(travel.id) }}>
                  Cancella
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <section className="my-5">
        <div>
          <div>
            <h2>Inserisci un nuovo viaggio</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-2">
                <label htmlFor="title" className="form-label">
                  Nome del viaggio
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  aria-describedby="titleHelp"
                  value={travel.title}
                  onChange={handleTravel}
                  name="title"
                  required
                />
              </div>
              <div className="mb-2">
                <label htmlFor="destination" className="form-label">
                  Destinazione del viaggio
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="destination"
                  aria-describedby="destinationHelp"
                  value={travel.destination}
                  onChange={handleTravel}
                  name="destination"
                  required
                />
              </div>
              <div className="d-flex justify-content-between">
                <div className="mb-2 w-50">
                  <label htmlFor="startDate" className="form-label">
                    Data di partenza
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="startDate"
                    aria-describedby="startDateHelp"
                    value={travel.startDate}
                    onChange={handleTravel}
                    name="startDate"
                    required
                  />
                </div>
                <div className="mb-2 w-50">
                  <label htmlFor="endDate" className="form-label">
                    Data di rientro
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="endDate"
                    aria-describedby="endDateHelp"
                    value={travel.endDate}
                    onChange={handleTravel}
                    name="endDate"
                    required
                  />
                </div>
              </div>
              <div className="mb-2">
                <label htmlFor="bg" className="form-label">
                  Immagine del viaggio
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="bg"
                  aria-describedby="bgHelp"
                  value={travel.bg}
                  onChange={handleTravel}
                  name="bg"
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary" key={travel.id}>
                Pubblica
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
