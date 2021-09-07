import { useEffect, useState } from "react";
import TrendingList from "../Components/TrendingList/TrendingList";
import { fetchTrendingMovies } from "../services/ApiMovies";

export default function HomePage() {
  const [movies, setMovies] = useState(null);
  useEffect(() => {
    fetchTrendingMovies().then((response) => {
      setMovies(response.results);
    });
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      {movies && <TrendingList movies={movies} />}
    </>
  );
}
