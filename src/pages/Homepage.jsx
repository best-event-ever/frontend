import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import de from "date-fns/locale/de";
registerLocale("de", de);
import { FaSearch, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

export function Homepage() {
  const navigate = useNavigate();
  const [search, setSearch] = useState({ word: "" });
  const [data, setData] = useState();
  const [startDate, setStartDate] = useState(new Date(), { locale: "de" });
  const changeHandler = (e) => {
    setSearch((prev) => (prev = { ...prev, [e.target.id]: e.target.value }));
  };
  const fetchData = () => {
    fetch(`mongodb/${search.search}`)
      .then((response) => response.json())
      .then((json) => setData(json));
  };
  const submitHandler = (e) => {
    e.preventDefault();
    fetchData();
  };

  const addItem = async (param) => {
    const data = await fetch(`mongodb/user/${param}`, {
      method: `POST`,
    });
    const detailData = await data.json();
    fetchData();
    alert("There is no such event");
  };
  return (
    <div>
      <h1>Suche nach Events in deiner Nähe</h1>
      <form action="" onSubmit={submitHandler}>
        <label for="inputCity" className="form-label">
          Stadt
        </label>
        <input
          type="text"
          className="city"
          id="city"
          placeholder="Berlin, Hamburg, München, ..."
          onChange={changeHandler}
        />
        <div class="dropdown">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Umkreissuche
          </button>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" onChange={changeHandler} href="#">
                5 km
              </a>
            </li>
            <li>
              <a class="dropdown-item" onChange={changeHandler} href="#">
                10 km
              </a>
            </li>
            <li>
              <a class="dropdown-item" onChange={changeHandler} href="#">
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
            <th scope="col">
              <FaHeart />
            </th>
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
    </div>
  );
}
