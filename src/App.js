import React, { useState } from "react";
import "./App.css";
import ShowModal from "./Components/Modal/ShowModal";
import MovieList from "./Components/MovieList/MovieList";
import NavBar from "./Components/NavBar/NavBar";

const App = () => {
    const [movies, setMovies] = useState([
        {
            Title: "Star Wars: Episode IV - A New Hope",
            posterUrl:
                "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
            rate: 2,
        },
        {
            Title: "Star Wars: Episode V - The Empire Strikes Back",

            posterUrl:
                "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
            rate: 3,
        },

        {
            Title: "Star Wars: Episode VI - Return of the Jedi",

            posterUrl:
                "https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
            rate: 4,
        },
        {
            Title: "Iron Man",
            posterUrl:
                "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg",
            rate: 3,
        },
        {
            Title: "Iron Man 3",
            posterUrl:
                "https://m.media-amazon.com/images/M/MV5BMjE5MzcyNjk1M15BMl5BanBnXkFtZTcwMjQ4MjcxOQ@@._V1_SX300.jpg",
            rate: 2,
        },
        {
            Title: "Iron Man 2",
            posterUrl:
                "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_SX300.jpg",
            rate: 1,
        },
        {
            Title: "Man of Steel",
            posterUrl:
                "https://m.media-amazon.com/images/M/MV5BMTk5ODk1NDkxMF5BMl5BanBnXkFtZTcwNTA5OTY0OQ@@._V1_SX300.jpg",
        },
        {
            Title: "Spider-Man",
            posterUrl:
                "https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg",
            rate: 4,
        },
        {
            Title: "Ant-Man",
            posterUrl:
                "https://m.media-amazon.com/images/M/MV5BMjM2NTQ5Mzc2M15BMl5BanBnXkFtZTgwNTcxMDI2NTE@._V1_SX300.jpg",
            rate: 5,
        },
        {
            Title: "The Amazing Spider-Man",
            posterUrl:
                "https://m.media-amazon.com/images/M/MV5BMjMyOTM4MDMxNV5BMl5BanBnXkFtZTcwNjIyNzExOA@@._V1_SX300.jpg",
        },
        {
            Title: "Spider-Man 2",
            posterUrl:
                "https://m.media-amazon.com/images/M/MV5BMzY2ODk4NmUtOTVmNi00ZTdkLTlmOWYtMmE2OWVhNTU2OTVkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
            rate: 3,
        },
        {
            Title: "Spider-Man: Homecoming",
            posterUrl:
                "https://m.media-amazon.com/images/M/MV5BNTk4ODQ1MzgzNl5BMl5BanBnXkFtZTgwMTMyMzM4MTI@._V1_SX300.jpg",
            rate: 4,
        },
        {
            Title: "Spider-Man 3",
            posterUrl:
                "https://m.media-amazon.com/images/M/MV5BYTk3MDljOWQtNGI2My00OTEzLTlhYjQtOTQ4ODM2MzUwY2IwXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg",
            rate: 1,
        },
    ]);

    const [search, setSearch] = useState("");
    const [rate, setRate] = useState(1);
    const addMovie = (newMovies) => {
        setMovies([...movies, newMovies]);
    };
    const [favourite, setFavourite] = useState([]);

    const addfavourite = (movie) => {
        setFavourite([...favourite, movie]);
    };
    return (
        <div className="movie-app">
            <div>
                <div>
                    <NavBar setSearch={setSearch} setRate={setRate} />
                </div>

                <div>
                    <ShowModal addMovie={addMovie} />
                </div>

                <div className="MovieList">
                    <MovieList movies={movies} search={search} rate={rate} />
                </div>
            </div>
        </div>
    );
};

export default App;
