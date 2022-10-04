import StarRatingComponent from "react-star-rating-component";
import React from "react";
import "./MovieCard.css";
import AddFavourites from "./AddFavourites";
const MovieCard = ({ movie ,addfavourite}) => {
    return (
        <div className="MovieCard" style={{ width: "18rem" }}>
            <div className="image-container">
                <img src={movie.posterUrl} alt="movie"></img>
                <AddFavourites addfavourite={addfavourite}/>
            </div>

            <div className="CardTitle">
                <h1 className="Title"> {movie.Title}</h1>
            </div>

            <div className="rate">
                <StarRatingComponent
                    name="rate"
                    editing={false}
                    starCount={5}
                    value={movie.rate}
                />
            </div>
        </div>
    );
};

export default MovieCard;
