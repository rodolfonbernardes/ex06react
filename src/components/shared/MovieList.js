import React from "react";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import {
  setFavoritos
} from "../../actions/addMovies";

export const MovieList = ({ movies})=>{
    
    const dispatch = useDispatch();
    
    return (
        <ul>
        {movies.data.results.map(movie => (
            <li><Link to={`movie/${movie.id}`}>{movie.title}</Link>  <button onClick={() => dispatch(setFavoritos(movie))}>Add</button></li>          
        ))}
        </ul>
  );
}