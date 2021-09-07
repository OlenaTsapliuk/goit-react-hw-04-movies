import { fetchCredits } from "../services/ApiMovies";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";

export default function Cast({ movieId }) {
  const [cast, setCast] = useState(null);

  useEffect(() => {
    fetchCredits(movieId).then((response) => {
      setCast(response.cast);
    });
  }, [movieId]);

  return (
    cast && (
      <ul>
        {cast.map((actor) => (
          <li key={actor.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
              alt={actor.name}
              width="100"
              height="150"
            ></img>
            <h3>{actor.name}</h3>
            <p>Character: {actor.character}</p>
          </li>
        ))}
      </ul>
    )
  );
}
