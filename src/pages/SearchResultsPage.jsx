import React from "react";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
export function SearchResultsPage({ search, setSearched }) {
  return (
    <div>
      <h1>SearchResultsPage</h1>
      <input value={search} onChange={(e) => setSearched(e.target.value)} />
      <Link to="/all-searchedevents">
        <button
          onClick={(e) => {
            setSearched(search);
          }}
        >
          Search
        </button>
      </Link>
    </div>
  );
}
