import React from "react";

export function LoginPage() {
  return (
    <div>
      <h1>LoginPage</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="InputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="InputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="InputPassword1" className="form-label">
            Password
          </label>
          <input type="password" className="form-control" id="InputPassword1" />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <div className="forgot-pw">
          <a href="/forgot-pw">Passwort vergesen</a>
        </div>
        <div className="organisation-form">
          Sind Sie ein Eventveranstalter? <a href="/profile">Organizer Login</a>
        </div>
        <div className="border-top border-danger">
          Neu hier? <a href="/registration">Jetzt registrieren!</a>
        </div>
      </form>
    </div>
  );
}
