import { fetchOneMovie } from "../services/ApiMovies";
import { useEffect, useState } from "react";
import { useRouteMatch, useParams } from "react-router-dom";

export default function MovieDetails() {
  const [movie, setMovie] = useState(null);
  // const {poster_path,title,vote_average,overview} = movie;

  const { movieId } = useParams();

  useEffect(() => {
    fetchOneMovie(movieId).then((movie) => {
      setMovie(movie);
    });
  }, [movieId]);

  return (
    <>
      {movie && (
        <>
          <div>
            <button type="button">Go back</button>
          </div>
          <div>
            <img src={movie.poster_path} alt={movie.title} />
          </div>
          <div>
            <h2>{movie.title}</h2>
            <p>User score: {movie.vote_average}</p>
            <h3>Overview</h3>
            <p>{movie.overview}</p>
            <h3>Genres</h3>
            <p>{movie.genres.map((genre) => genre.name).join(" , ")}</p>
          </div>
        </>
      )}
    </>
  );
}
