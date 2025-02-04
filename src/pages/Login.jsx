import React from "react";
import { Link } from "react-router-dom";
export default function Login() {
  return (
    <div className="d-flex flex-column align-items-center">
      <div>
        <h2>Login</h2>
        <form action="">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input type="name" className="form-control" id="name" />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input type="password" className="form-control" id="password" />
          </div>
          <Link to="/travels" className="btn btn-sm btn-dark">
            Login
          </Link>
        </form>
      </div>
    </div>
  );
}
