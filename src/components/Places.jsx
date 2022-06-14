import React from "react";
import { Link } from "react-router-dom";

export default function Places({ places }) {
  return (
    <div>
      <h1>Places:</h1>
      <ul>
        {places.map((place) => (
          <li key={place.id}>
            <Link to={place.id}>{place.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
