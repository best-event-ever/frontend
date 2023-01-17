import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import de from "date-fns/locale/de";
registerLocale("de", de);
import { FaSearch, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

export function Homepage() {
  const [startDate, setStartDate] = useState(new Date());
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/results/" + input);
  };
  const [search, setSearched] = useState([]);
  let params = useParams();
  const getSearched = async () => {
    const data = await fetch(`www.mongodb.com/events`);
    const recipes = await data.json();
    setSearched(recipes);
  };
  useEffect(() => {
    getSearched(params.searched);
  }, [params.searched]);

  return (
    <div>
      <h1>Suche nach Events in deiner Nähe</h1>
      <form action="" onSubmit={submitHandler}>
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
        <div className="dropdown">
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
        <button className="searchButton">
          <FaSearch />
        </button>
      </form>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Event</th>
            <th scope="col">Ort</th>
            <th scope="col">Datum + Uhrzeit</th>
            <th scope="col">Preis</th>
            <th scope="col">
              <FaHeart />
            </th>
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
            );
          })}
      </table>
    </div>
  );
}
