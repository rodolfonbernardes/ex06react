import React, {useState, useEffect} from "react";
import { MoviesService } from "../services/MoviesService";
import { MovieList } from "./shared/MovieList";

export const MoviesList = () => {
  const [movies, setMovies] = useState({ data: { results: [] }});

    const requestMovies = async () => {
      const moviesResult = await MoviesService.getPopularMovies();
      setMovies(moviesResult);
    };

    useEffect(() => {
      requestMovies();
    }, []);
  
    return <MovieList movies={movies}/>
};
