import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import de from "date-fns/locale/de";
registerLocale("de", de);
import { FaSearch } from "react-icons/fa";
import Suchergebnis from '../components/Suchergebnis.jsx';  
// import { Link } from "react-router-dom";

export function Homepage() {
  const [startDate, setStartDate] = useState(new Date());
  const [input, setInput] = useState("");
  const [search, setSearched] = useState([]);
  const [uebergabe, setUebergabe] = useState("");
  const navigate = useNavigate();


  const submitHandler = async (e) => {
    e.preventDefault();
    const data = await fetch("http://localhost:4011/events/");
    const events = await data.json();
    console.log('event ',events);
    setSearched(events);
    setUebergabe(input);
    setInput("");
  };

  // const [search, setSearched] = useState([]);
  // let params = useParams();
  // const getSearched = async () => {
  //   const data = await fetch("http://localhost:4009/events/");
  //   const recipes = await data.json();
  //   setSearched(recipes);
  // };

  // useEffect(() => {
  //   getSearched(params.searched);
  // }, [params.searched]);

  return (
    <div>
      {/* S U C H E */}
      <h1>Suche nach Events in deiner Nähe</h1>
      <form action="" className="mt-5" onSubmit={submitHandler}>
        <div className="mb-3">
          <label htmlFor="inputCity" className="form-label">
            Stadt
          </label>

          <input
            type="text"
            className="city"
            id="city"
            placeholder="Berlin, Hamburg, München, ..."
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
        </div>
        <div className="dropdown mb-3">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Umkreissuche
          </button>
          <ul className="dropdown-menu">
            <li>
              <a
                className="dropdown-item"
                onChange={(e) => setInput(e.target.value)}
                value={input}
                href="#"
              >
                5 km
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                onChange={(e) => setInput(e.target.value)}
                value={input}
                href="#"
              >
                10 km
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                onChange={(e) => setInput(e.target.value)}
                value={input}
                href="#"
              >
                20 km
              </a>
            </li>
          </ul>
        </div>
        <div className="mb-3">
          <label htmlFor="datePicker">Wähle ein Datum</label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            monthsShown={1}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={60}
            timeCaption="Uhrzeit"
            locale="de"
            dateFormat="dd.MM.yyyy HH:mm"
            value={startDate}
          />
        </div>
        <button className="searchButton">
          <FaSearch />
        </button>
      </form>
      {/* V E R A N S T A L T U N G S Ü B E R S I C H T */}
      <Suchergebnis search={search} uebergabe={uebergabe}/>
      {/* <table className="table">
        <thead>
          <tr>
            <th scope="col">Event</th>
            <th scope="col">Ort</th>
            <th scope="col">Datum</th>
            <th>Uhrzeit</th>
            <th scope="col">Eintrittspreis</th>
          </tr>
        </thead>
        {search.events &&
          search.events.map((item) => {
            return (
              <tbody>
                <div className="table-group-divider"></div>
                <tr>
                  <th scope="row">
                    <a href={`/event-details`}>Event 1</a>
                  </th>
                  <td>berlin</td>
                  <td>heute Abend</td>
                </tr>
                <tr>
                  <th scope="row">Event 2</th>
                  <td>stuttgart</td>
                  <td>morgen Abend</td>
                </tr>
              </tbody>
            );
          })}
      </table> */}
    </div>
  );
}
