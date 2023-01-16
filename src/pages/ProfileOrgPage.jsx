import React from "react";

export function ProfileOrgPage() {
  return (
    <div>
      <h1>ProfilOrganisationPage</h1>
      <form action="">
        {/* Veranstalter */}
        <div className="mb-3">
          <label for="InputCompany" className="form-label">
            Unternehmensname
          </label>
          <input
            type="Company"
            className="form-control"
            id="InputCompany"
            aria-describedby="CompanyHelp"
          />
        </div>
        {/* Ansprechperson */}
        <div className="mb-3">
          <label for="Inputperson" className="form-label">
            Ansprechperson
          </label>
          <input
            type="person"
            className="form-control"
            id="Inputperson"
            aria-describedby="personHelp"
          />
        </div>

        {/* Straße und Hausnummer */}
        <div className="mb-3">
          <label for="InputStreet" className="form-label">
            Straße und Hausnummer
          </label>
          <input
            type="street"
            className="form-control"
            id="Inputstreet"
            aria-describedby="streetHelp"
          />
        </div>
        {/* PLZ */}
        <div className="mb-3">
          <label for="Inputzipcode" className="form-label">
            Postleitzahl
          </label>
          <input
            type="zipcode"
            className="form-control"
            id="Inputzipcode"
            aria-describedby="zipcodeHelp"
          />
        </div>
        {/* Stadt */}
        <div className="mb-3">
          <label for="Inputcity" className="form-label">
            Stadt
          </label>
          <input
            type="city"
            className="form-control"
            id="Inputcity"
            aria-describedby="cityHelp"
          />
        </div>
        {/* E-Mail */}
        <div className="mb-3">
          <label for="Inputemail" className="form-label">
            E-Mail
          </label>
          <input
            type="email"
            className="form-control"
            id="Inputemail"
            aria-describedby="emailHelp"
          />
        </div>
        {/* Telefonnummer */}
        <div className="mb-3">
          <label for="Inputphone" className="form-label">
            Telefonnummer
          </label>
          <input
            type="phone"
            className="form-control"
            id="Inputphone"
            aria-describedby="phoneHelp"
          />
        </div>
        {/* Bankverbindung */}
        <div className="mb-3">
          <label for="Inputpayment" className="form-label">
            Bankverbindung !!!!!!!!!!!!!!!!
          </label>
          <input
            type="payment"
            className="form-control"
            id="Inputpayment"
            aria-describedby="paymentHelp"
          />
        </div>

        {/* Passwort */}
        <div className="mb-3">
          <label for="Inputpassword" className="form-label">
            Passwort
          </label>
          <input
            type="password"
            className="form-control"
            id="Inputpassword"
            aria-describedby="passwordHelp"
          />
        </div>
        {/* Passwort wiederholen */}
        <div className="mb-3">
          <label for="InputrepeatPassword" className="form-label">
            Passwort wiederholen
          </label>
          <input
            type="repeatPassword"
            className="form-control"
            id="InputrepeatPassword"
            aria-describedby="repeatPasswordHelp"
          />
        </div>
      </form>
      {/* Veranstaltungsübersicht */}
      <h1>Veranstaltungsübersicht</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Event</th>
            <th scope="col">Ort</th>
            <th scope="col">Datum + Uhrzeit</th>
            <th scope="col">Veranstaltungsnnummer</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          <tr>
            <th scope="row">
              <a href={`/event-details`}>Event 1</a>
            </th>
            <td>berlin</td>
            <td>heute Abend</td>
            <td>
              <a href="">
                <FaHeart />
              </a>
            </td>
          </tr>
          <tr>
            <th scope="row">Event 2</th>
            <td>stuttgart</td>
            <td>morgen Abend</td>
            <td>
              <a href="">
                <FaHeart />
              </a>
            </td>
          </tr>
        </tbody>
      </table>
      <form action=""></form>
    </div>
  );
}
