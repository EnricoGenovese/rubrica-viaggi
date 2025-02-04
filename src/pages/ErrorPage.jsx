import { Link } from "react-router-dom";
export default function ErrorPage() {
  return (
    <div
      className="d-flex flex-column align-items-center  text-center "
      style={{
        backgroundImage:
          'url("https://plus.unsplash.com/premium_photo-1711987456340-e16012c6d527?q=80&w=1978&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
    >
      <div
        className="my-5 p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      >
        <h1 className="text-danger fw-bold mt-">ops!</h1>
        <p className="fs-3 fw-bold text-white">Sembra che tu ti sia perso.</p>
        <Link to={"/"} className="btn btn-primary">
          Torna alla Home
        </Link>
      </div>
    </div>
  );
}
