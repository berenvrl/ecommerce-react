import { Link } from "react-router-dom";
import { useRef } from "react";
import { useKey } from "./useKey";

export default function SearchBar({
  query,
  setQuery,
  allproducts,
  handleAddItems,
}) {
  const inputEl = useRef(null);

  useKey("Enter", function () {
    if (document.activeElement === inputEl.current) return;

    setQuery(" ");
  });

  return (
    <div className="search">
      <input
        className="input"
        type="text"
        placeholder="Search an Item..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {query.length > 0 ? (
        <button>
          <Link to="filtered" className="search-link">
            <span>
              <img src="./iconsearch.svg" alt="serach icon" />
            </span>{" "}
            Search
          </Link>
        </button>
      ) : (
        <button>
          <span>
            <img src="./iconsearch.svg" alt="serach icon" />
          </span>{" "}
          Search
        </button>
      )}
    </div>
  );
}
