import { trips } from "../model/Data.js";
import { Link } from "react-router-dom";

export default function Travels() {
  return (
    <>
      <div className="container mt-5">
        {trips.map((trip) => (
          <div
            className="my-5 bg-light p-1"
            style={{
              backgroundImage: trip.bg,
              backgroundSize: "cover",
              backgroundPosition: "center",
              color: "white",
            }}
            key={trip.id}
          >
            <div className="my-2">
              <h2
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.7)",
                  width: "fit-content",
                }}
                className="p-2"
              >
                {trip.title}
              </h2>
            </div>
            <div className="d-flex flex-direction-column justify-content-around my-2">
              <p
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.7)",
                  width: "fit-content",
                }}
              >
                Data della partenza: {trip.startDate}
              </p>
              <p
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.7)",
                  width: "fit-content",
                }}
              >
                Data di ritorno: {trip.endDate}
              </p>
            </div>
            <div className="my-2">
              <h3
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.7)",
                  width: "fit-content",
                }}
              >
                {" "}
                {trip.destination}
              </h3>
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
