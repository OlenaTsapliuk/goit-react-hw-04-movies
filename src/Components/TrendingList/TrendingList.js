import { Link, useRouteMatch } from "react-router-dom";

function TrendingList({ movies }) {
  // const { url } = useRouteMatch();
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Link to={`movies/${movie.id}`}>
            {movie.title} / rating: {movie.vote_average}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default TrendingList;
