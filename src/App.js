import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import { useState } from "react";
// import Appbar from "./Components/AppBar/AppBar";
import Container from "./Components/Container";
import Navigation from "./Components/Navigation";
import HomePage from "./views/HomePage";
import MovieDetails from "./views/MovieDetails";
import MoviesPage from "./views/MoviesPage";

function App() {
  return (
    <Container>
      <Navigation />

      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>

        <Route path="/movies" exact>
          <MoviesPage />
        </Route>
        <Route path="/movies/:movieId">
          <MovieDetails />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Container>
  );
}

export default App;
