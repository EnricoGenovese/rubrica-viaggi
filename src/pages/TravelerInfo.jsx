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
      <div
        className="my-5 p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      >
        <div
          key={traveler.id}
          className="list-group-item d-flex justify-content-between"
        >

          <h3 className="text-center w-100 text-white">{traveler.name} {traveler.surname}</h3>

        </div>
        <div className="d-flex flex-column border-md-bottom flex-md-row justify-content-md-around text-white pt-3">
          <div className="border-bottom border-light py-3">
            <h4 className="pb-2">Indirizzo e-mail:</h4>
            <h4 className="">
              <strong>{traveler.email}</strong>
            </h4>
          </div>
          <div className="border-bottom py-3">
            <h4 className="pb-1">Numero di telefono:</h4>
            <h4 className="">
              <strong>{traveler.phoneNumber}</strong>
            </h4>
          </div>

          <div className="border-bottom border-light py-3">
            <h4 className="pb-2">Codice Fiscale:</h4>
            <h4 className="">
              <strong>{traveler.ssn}</strong>
            </h4>
          </div>
        </div>

        <div className="d-flex justify-content-center justify-content-md-end  gap-3 pt-5">
          <Link to={`/`} className="btn btn-dark btn-sm">
            Torna alla Home Page
          </Link>
          <Link to={`/${currentTripId}`} className="btn btn-dark btn-sm">
            Torna al viaggio
          </Link>
        </div>
      </div>
    </div>
  );
}
