import { Link } from "react-router-dom";
export default function ErrorPage() {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center text-center mt-5 ">
      <h1 className="text-danger fw-bold ">Oops!</h1>
      <p className="fs-3">Qualcosa è andato storto.</p>
      <Link to={"/"} className="btn btn-primary">
        Torna alla Home
      </Link>
    </div>
  );
}
