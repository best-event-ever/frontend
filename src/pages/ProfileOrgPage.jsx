import React from "react";
import { FaHeart } from "react-icons/fa";
import { useState } from "react";
import DatePicker from "react-datepicker";
import connection from "../../connection.json";

export function ProfileOrgPage() {
  const [startDate, setStartDate] = useState(new Date());

  // POST event -----
  const [event, setEvent] = useState({
    eventTitle: "",
    eventPlace: "",
    eventCity: "",
    eventDate: "",
    eventPrice: "",
  });

  const handleChange = (e) => {
    setEvent({ ...event, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:4009/organizer/events/", {
      method: "POST",
      body: JSON.stringify(event),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((response) => response.json());
    setEvent(event);
    // setInputTitle("");
    // setInputPlace("");
    // setInputCity("");
    // setInputPrice("");
    console.log(event);
  };

  // const showList = () => {
  //   fetchData();
  // }

  // const itemDelete = (e) => {
  //   e.preventDefault();
  //   fetch(`${connection.URI}`, {
  //     method: "DELETE",
  //     headers: {
  //       "Content-type": "application/json; charset=UTF-8",
  //     },
  //   })
  //   .then((response) => response.json())
  //   .then((response) => fetchData());
  // };
  return (
    <div>
      <h1>ProfilOrganisationPage</h1>
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
        {/* Passwort ändern */}
        {/* neues Passwort */}
        <div className="mb-3">
          <div className="border-top border-danger">Passwort ändern</div>
          <label htmlFor="Inputpassword" className="form-label">
            Neues Passwort
          </label>
          <input
            type="password"
            className="form-control"
            id="Inputpassword"
            aria-describedby="passwordHelp"
          />
        </div>
        {/* Passwort wiederholen */}
        <div className="mb-3 border-top border-danger">
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
      {/* Veranstaltungsübersicht */}
      <h1>Veranstaltungsübersicht</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Event</th>
            <th scope="col">Ort</th>
            <th scope="col">Datum + Uhrzeit</th>
            <th scope="col">Eintrittspreisreis</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          <tr>
            <th scope="row">
              <a href={`/event-details`}>Event 1</a>
            </th>
            <td>berlin</td>
            <td>20.05.2023</td>
            <td>100,00€</td>
          </tr>
          <tr>
            <th scope="row">Event 2</th>
            <td>stuttgart</td>
            <td>morgen Abend</td>
          </tr>
        </tbody>
      </table>
      <form action="" onSubmit={handleSubmit}>
        <h3>Neue Veranstaltung hinzufügen</h3>
        <div className="mb-3">
          <label htmlFor="InputEventTitle" className="form-label">
            Name der Veranstaltung
          </label>
          <input
            value={event.eventTitle}
            type="text"
            className="form-control"
            id="eventTitle"
            aria-describedby="eventTitleHelp"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="InputEventPlace" className="form-label">
            Veranstaltungsort
          </label>
          <input
            value={event.eventPlace}
            type="text"
            className="form-control"
            id="eventPlace"
            aria-describedby="eventPlaceHelp"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="InputEventCity" className="form-label">
            Stadt
          </label>
          <input
            value={event.eventCity}
            type="text"
            className="form-control"
            id="eventCity"
            aria-describedby="eventCityHelp"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="eventDate">Datum und Uhrzeit</label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            monthsShown={1}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            timeCaption="Uhrzeit"
            locale="de"
            dateFormat="dd.MM.yyyy HH:mm"
            value={startDate}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="InputEventPrice" className="form-label">
            Preis
          </label>
          <input
            value={event.eventPrice}
            type="text"
            className="form-control"
            id="eventPrice"
            aria-describedby="eventPriceHelp"
            onChange={handleChange}
          />
        </div>
        <button type="submit">Speichern</button>
      </form>
    </div>
  );
}
