import React from "react";

export function RegistrationOrgPage() {
  return (
    <div>
      <h1>RegistrationOrganisationPage</h1>

      <form action="">
        {/* Veranstalter */}
        <div className="mb-3">
          <label htmlFor="InputCompany" className="form-label">
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
          <label htmlFor="Inputperson" className="form-label">
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
          <label htmlFor="InputStreet" className="form-label">
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
          <label htmlFor="Inputzipcode" className="form-label">
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
          <label htmlFor="Inputcity" className="form-label">
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
          <label htmlFor="Inputemail" className="form-label">
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
          <label htmlFor="Inputphone" className="form-label">
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
          <label htmlFor="Inputpayment" className="form-label">
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
          <label htmlFor="Inputpassword" className="form-label">
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
          <label htmlFor="InputrepeatPassword" className="form-label">
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
    </div>
  );
}
