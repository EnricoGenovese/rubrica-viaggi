import { trips } from "../model/Data.js";
import { Link } from "react-router-dom";

export default function Travels() {
  let today = new Date();
  const dd = today.getDate();
  const mm = today.getMonth() + 1;
  const year = today.getFullYear();
  today = year + "-" + ("0" + mm).slice(-2) + "-" + ("0" + dd).slice(-2);
  console.log(today);

  const ongoingTrips = trips.filter((trip) => trip.startDate < today);
  const futureTrips = trips.filter((trip) => trip.startDate > today);

  if (ongoingTrips.length == 0 && futureTrips.length == 0) {
    return (
      <p className="text-center mt-5 text-danger fs-1">
        Nessun viaggio trovato.
      </p>
    );
  }

  return (
    <>
      <div className="container mt-5">
        <div className="p-2">
          <h2 className="fw-bold">Viaggi in corso: </h2>
        </div>
        {ongoingTrips.map((trip) => (
          <div
            className="my-5 bg-light p-1"
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
              <div className="d-flex flex-direction-column justify-content-around my-2">
                <p>Data della partenza: {trip.startDate}</p>
                <p>Data di ritorno: {trip.endDate}</p>
              </div>
              <div className="my-2 d-flex justify-content-between">
                <h3>{trip.destination}</h3>
                <Link to={`/${trip.id}`} className="btn btn-dark btn-sm">
                  Vai al viaggio
                </Link>
              </div>
            </div>
          </div>
        ))}

        <div className="p-2">
          <h2 className="fw-bold">Viaggi futuri: </h2>
        </div>
        {futureTrips.map((trip) => (
          <div
            className="my-5 bg-light p-1"
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
              <div className="d-flex flex-direction-column justify-content-around my-2">
                <p>Data della partenza: {trip.startDate}</p>
                <p>Data di ritorno: {trip.endDate}</p>
              </div>
              <div className="my-2 d-flex justify-content-between">
                <h3>{trip.destination}</h3>
                <Link to={`/${trip.id}`} className="btn btn-sm btn-dark">
                  Vai al viaggio
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
