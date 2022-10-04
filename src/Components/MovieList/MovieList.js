import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieList.css"
const MovieList = ({ movies, search ,rate}) => {
    const filteredMovies = movies.filter((movie) =>
        movie.Title.includes(search)&&movie.rate>=rate
    );

    return (
        <div className="MovieList">
            {filteredMovies.map((movie, index) => (
                <MovieCard key={index} movie={movie} />
            ))}
        </div>
    );
};

export default MovieList;
