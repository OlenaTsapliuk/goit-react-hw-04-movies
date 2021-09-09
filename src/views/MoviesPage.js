import { ToastContainer, toast } from "react-toastify";
import { useState, useEffect } from "react";
import { fetchSearchMovies } from "../services/ApiMovies";
import Spinner from "../Components/Loader/Loader";

import Searchbar from "../Components/SearchBar/Searchbar";
import MoviesList from "../Components/MovieList/MovieList";

export default function MoviesPage() {
  const [movies, setMovies] = useState(null);
  const [movieName, setMovieName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!movieName) {
      return;
    }

    function fetchMovies() {
      setIsLoading(true);
      fetchSearchMovies(movieName)
        .then((movies) => {
          setMovies(movies.results);
          if (!movies.results.length) {
            toast.error("No matches were found! Try again");
            return;
          }
        })
        .catch((error) => {
          throw new Error("Something went wrong. Try again!");
        })
        .finally(() => {
          setIsLoading(false);

          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth",
          });
        });
    }

    fetchMovies();
  }, [movieName]);

  const searchMovie = (movieName) => {
    setMovieName(movieName);
  };

  return (
    <>
      <Searchbar onSubmit={searchMovie} />
      {movies && <MoviesList movies={movies} />}
      {isLoading && <Spinner />}
      <ToastContainer autoClose={3000} />
    </>
  );
}
