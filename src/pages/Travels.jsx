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

  return (
    <>
      <div className="container mt-5">
        <div className="bg-light p-2">
          <h2>Viaggi in corso: </h2>
        </div>
        {ongoingTrips.map((trip) => (
          <div
            className="my-5 bg-light p-1"
            key={trip.id}
            style={{
              backgroundImage: trip.bg,
              backgroundSize: "cover",
              backgroundPosition: "center",
              color: "white",
            }}
          >
            <div className="my-2">
              <h2>{trip.title}</h2>
            </div>
            <div className="d-flex flex-direction-column justify-content-around my-2">
              <p>Data della partenza: {trip.startDate}</p>
              <p>Data di ritorno: {trip.endDate}</p>
            </div>
            <div className="my-2">
              <h3>{trip.destination}</h3>
              <Link to={`/${trip.id}`} className="btn btn-primary">
                Vai al viaggio
              </Link>
            </div>
          </div>
        ))}

        <div className="bg-light p-2">
          <h2>Viaggi futuri: </h2>
        </div>
        {futureTrips.map((trip) => (
          <div
            className="my-5 bg-light p-1"
            key={trip.id}
            style={{
              backgroundImage: trip.bg,
              backgroundSize: "cover",
              backgroundPosition: "center",
              color: "white",
            }}
          >
            <div className="my-2">
              <h2>{trip.title}</h2>
            </div>
            <div className="d-flex flex-direction-column justify-content-around my-2">
              <p>Data della partenza: {trip.startDate}</p>
              <p>Data di ritorno: {trip.endDate}</p>
            </div>
            <div className="my-2">
              <h3>{trip.destination}</h3>
              <Link to={`/${trip.id}`} className="btn btn-primary">
                Vai al viaggio
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
