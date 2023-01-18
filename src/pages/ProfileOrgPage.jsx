import React from "react";
import { useState } from "react";

export function ProfileOrgPage() {
  // P A T C H  O R G A N I Z E R -----
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
    passwordWiederholen: "",
    isAdmin: false,
  });

  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:4009/organizer/", {
      method: "PATCH",
      body: JSON.stringify(organizer),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((response) => response.json());
    setOrganizer(organizer);
    console.log(organizer);
  };

  // P O S T  E V E N T -----
  const [event, setEvent] = useState({
    eventTitle: "",
    eventPlace: "",
    eventCity: "",
    eventDate: "",
    eventTime: "",
    eventPrice: "",
    img: "",
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
    console.log(event);
  };

  return (
    <div className="mt-4">
      <h1>Ihr Profil</h1>

      {/* D A T E N  Ä N D E R N  */}
      <form action="" className="mt-4" onSubmit={handleUpdateSubmit}>
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
          Speichern
        </button>
      </form>

      {/* Veranstaltungsübersicht */}
      <h1>Veranstaltungsübersicht</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Event</th>
            <th scope="col">Ort</th>
            <th scope="col">Datum</th>
            <th scope="col">Uhrzeit</th>
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

      {/* N E U E S  E V E N T  A N L E G E N */}
      <form action="" onSubmit={handleSubmit}>
        <h3 className="mt-5 mb-3">Neue Veranstaltung hinzufügen</h3>

        {/* Titel */}
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
            placeholder="Oktoberfest"
          />
        </div>

        {/* Ort */}
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
            placeholder="Arena"
          />
        </div>

        {/* Stadt */}
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
            placeholder="Berlin, Hamburg, Münster, ..."
          />
        </div>

        {/* Datum */}
        <div className="mb-3">
          <label htmlFor="eventDate">Datum</label>
          {/* <DatePicker
            onChange={(date) => setStartDate(date)}
            monthsShown={1}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            timeCaption="Uhrzeit"
            locale="de"
            dateFormat="dd.MM.yyyy HH:mm"
            value={startDate}
          /> */}
          <input
            value={event.eventDate}
            type="text"
            className="form-control"
            id="eventDate"
            aria-describedby="eventDateHelp"
            onChange={handleChange}
            placeholder="25.02.2023 (dd.mm.yyyy)"
          />
        </div>

        {/* Uhrzeit */}
        <div className="mb-3">
          <label htmlFor="InputEventTime" className="form-label">
            Uhrzeit
          </label>
          <input
            value={event.eventTime}
            type="text"
            className="form-control"
            id="eventTime"
            aria-describedby="eventTimeHelp"
            onChange={handleChange}
            placeholder="08:15 (hh:mm)"
          />
        </div>

        {/* Eintrittspreis */}
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
            placeholder="€"
          />
        </div>
        <button className="mt-2" type="submit">
          Speichern
        </button>
      </form>
    </div>
  );
}
