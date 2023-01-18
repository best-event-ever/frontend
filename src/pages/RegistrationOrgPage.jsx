import React from "react";
import { useState } from "react";

export function RegistrationOrgPage() {
  // POST organizer -----
  const [organizer, setOrganizer] = useState({
    veranstalter: "",
    ansprechperson: "",
    strasse: "",
    hausnr: "",
    plz: "",
    stadt: "",
    email: "",
    telefonnummer: "",
    password: "",
    isAdmin: false,
  });

  const handleChange = (e) => {
    setOrganizer({ ...organizer, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:4009/organizer/", {
      method: "POST",
      body: JSON.stringify(organizer),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((response) => response.json());
    setOrganizer(organizer);
    console.log(organizer);
  };

  return (
    <div className="mt-4">
      <h1>Registrieren Sie sich jetzt!</h1>

      {/* R E G I S T R I E R U N G  O R G A N I Z E R */}
      <form action="" className="mt-4" onSubmit={handleSubmit}>
        {/* Veranstalter */}
        <div className="mb-3">
          <label htmlFor="InputCompany" className="form-label">
            Unternehmensname
          </label>
          <input
            value={organizer.veranstalter}
            type="text"
            className="form-control"
            id="InputCompany"
            aria-describedby="CompanyHelp"
            onChange={handleChange}
          />
        </div>

        {/* Ansprechperson */}
        <div className="mb-3">
          <label htmlFor="Inputperson" className="form-label">
            Ansprechperson
          </label>
          <input
            value={organizer.ansprechperson}
            type="text"
            className="form-control"
            id="Inputperson"
            aria-describedby="personHelp"
            onChange={handleChange}
          />
        </div>

        {/* Straße */}
        <div className="mb-3">
          <label htmlFor="InputStreet" className="form-label">
            Straße
          </label>
          <input
            value={organizer.strasse}
            type="text"
            className="form-control"
            id="Inputstreet"
            aria-describedby="streetHelp"
            onChange={handleChange}
          />
        </div>

        {/* Hausnummer */}
        <div className="mb-3">
          <label htmlFor="InputStrNumber" className="form-label">
            Hausnummer
          </label>
          <input
            value={organizer.hausnr}
            type="text"
            className="form-control"
            id="InputStrNumber"
            aria-describedby="strNumberHelp"
            onChange={handleChange}
          />
        </div>

        {/* PLZ */}
        <div className="mb-3">
          <label htmlFor="Inputzipcode" className="form-label">
            Postleitzahl
          </label>
          <input
            value={organizer.plz}
            type="text"
            className="form-control"
            id="Inputzipcode"
            aria-describedby="zipcodeHelp"
            onChange={handleChange}
          />
        </div>

        {/* Stadt */}
        <div className="mb-3">
          <label htmlFor="Inputcity" className="form-label">
            Stadt
          </label>
          <input
            value={organizer.stadt}
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
            value={organizer.email}
            type="email"
            className="form-control"
            id="Inputemail"
            aria-describedby="emailHelp"
            onChange={handleChange}
          />
        </div>

        {/* Telefonnummer */}
        <div className="mb-3">
          <label htmlFor="Inputphone" className="form-label">
            Telefonnummer
          </label>
          <input
            value={organizer.telefonnummer}
            type="text"
            className="form-control"
            id="Inputphone"
            aria-describedby="phoneHelp"
            onChange={handleChange}
          />
        </div>

        {/* Passwort */}
        <div className="mb-3">
          <label htmlFor="Inputpassword" className="form-label">
            Passwort
          </label>
          <input
            value={organizer.password}
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
            value={organizer.passwordWiederholen}
            type="password"
            className="form-control"
            id="InputrepeatPassword"
            aria-describedby="repeatPasswordHelp"
            onChange={handleChange}
          />
        </div>
        <button className="mt-2" type="submit">
          Registrieren
        </button>
      </form>
    </div>
  );
}
