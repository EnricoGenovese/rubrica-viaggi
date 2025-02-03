import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import { travelers, trips } from "../model/Data";

export default function TravelerInfo() {
  const { id } = useParams();
  // console.log(id)

  const traveler = travelers.find((traveler) => traveler.id === parseInt(id));
  const currentTripId = trips.reduce((curr, next) =>
    curr.travelers.map((traveler) => traveler.id).includes(traveler.id)
      ? curr
      : next
  ).id;
  console.log("trip: ", currentTripId, "traveler: ", traveler.id);

  return (
    <div className="container mt-5">
      <div className="my-5  p-4">
        <div
          key={traveler.id}
          className="list-grouh4-item d-flex justify-content-between"
        >
          <div className="my-2">
            <h3>{traveler.name}</h3>
            <h3>{traveler.surname}</h3>
          </div>
        </div>
        <div className="my-5">
          <h4 className="my-1">
            Indirizzo e-mail: <strong>{traveler.email}</strong>
          </h4>
          <h4 className="my-1">
            Numero di telefono: <strong>{traveler.phoneNumber}</strong>
          </h4>
          <h4 className="my-1">
            Codice Fiscale: <strong>{traveler.ssn}</strong>
          </h4>
        </div>
        <div className="d-flex justify-content-around">
          <Link to={`/`} className="btn btn-primary">
            Torna ai viaggi
          </Link>
          <Link to={`/${currentTripId}`} className="btn btn-primary">
            Torna alla lista Viaggiatori
          </Link>
        </div>
      </div>
    </div>
  );
}
