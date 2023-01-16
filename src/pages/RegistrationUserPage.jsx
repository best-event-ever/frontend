import React from "react";

export function RegistrationUserPage() {
  return (
    <div>
      <h1>RegistrationUserPage</h1>
      <form action="">
        {/* Benutzername */}
        <div className="mb-3">
          <label for="InputProfileName" className="form-label">
            Benutzername
          </label>
          <input
            type="profilename"
            className="form-control"
            id="InputProfileName"
            aria-describedby="profileNameHelp"
          />
        </div>
        {/* Vorname */}
        <div className="mb-3">
          <label for="Inputfirstname" className="form-label">
            Vorname
          </label>
          <input
            type="vorname"
            className="form-control"
            id="InputfirstName"
            aria-describedby="firstNameHelp"
          />
        </div>
        {/* Nachname */}
        <div className="mb-3">
          <label for="InputLastName" className="form-label">
            Nachname
          </label>
          <input
            type="lastname"
            className="form-control"
            id="InputLastName"
            aria-describedby="lastNameHelp"
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
        {/* Zahlungsmethode */}
        <div className="mb-3">
          <label for="Inputpayment" className="form-label">
            Zahlungsmethode
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
    </div>
  );
}
