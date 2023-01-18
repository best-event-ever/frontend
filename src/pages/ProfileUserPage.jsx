import React from "react";
import { useState } from "react";

export function ProfileUserPage() {
  // P A T C H  U S E R
  const [user, setUser] = useState({
    benutzername: "",
    stadt: "",
    email: "",
    password: "",
    passwordWiederholen: "",
    isAdmin: false,
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:4009/user", {
      method: "PATCH",
      body: JSON.stringify(user),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((response) => response.json());
    setUser(user);
    console.log(user);
  };

  return (
    <div>
      <h1 className="mt-4">Mein Profil</h1>

      {/* D A T E N  Ä N D E R N */}
      <form action="" className="mt-4" onSubmit={handleSubmit}>
        {/* Benutzername */}
        <div className="mb-3">
          <label htmlFor="InputProfileName" className="form-label">
            Benutzername
          </label>
          <input
            value={user.benutzername}
            type="text"
            className="form-control"
            id="InputProfileName"
            aria-describedby="profileNameHelp"
            onChange={handleChange}
          />
        </div>

        {/* Stadt */}
        <div className="mb-3">
          <label htmlFor="Inputcity" className="form-label">
            Stadt
          </label>
          <input
            value={user.stadt}
            type="text"
            className="form-control"
            id="Inputcity"
            aria-describedby="cityHelp"
            onChange={handleChange}
          />
        </div>

        {/* E-Mail */}
        <div className="mb-3">
          <label htmlFor="Inputemail" className="form-label">
            E-Mail
          </label>
          <input
            value={user.email}
            type="email"
            className="form-control"
            id="Inputemail"
            aria-describedby="emailHelp"
            onChange={handleChange}
          />
        </div>

        {/* Passwort */}
        <div className="mb-3">
          <label htmlFor="Inputpassword" className="form-label">
            Passwort
          </label>
          <input
            value={user.password}
            type="password"
            className="form-control"
            id="Inputpassword"
            aria-describedby="passwordHelp"
            onChange={handleChange}
          />
        </div>

        {/* Passwort wiederholen */}
        <div className="mb-3">
          <label htmlFor="InputrepeatPassword" className="form-label">
            Passwort wiederholen
          </label>
          <input
            value={user.passwordWiederholen}
            type="password"
            className="form-control"
            id="InputrepeatPassword"
            aria-describedby="repeatPasswordHelp"
            onChange={handleChange}
          />
        </div>
        <button className="mt-2" type="submit">
          Speichern
        </button>
      </form>
      {/* G E S P E I C H E R T E  E V E N T S */}
      {/* CODE */}
    </div>
  );
}
