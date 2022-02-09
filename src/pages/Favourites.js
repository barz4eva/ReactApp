import axios from "axios";
import { useEffect, useState } from "react";
import { Alert } from "react-bootstrap";

const Favourites = props => {

    const [movies, setMovies] = useState([]);

    const fetchMovies = () => {
        axios.get('https://reactnative.dev/movies.json')
        .then(response => {
            setMovies(response.data.movies);
        })
    }

    useEffect(() => {
        fetchMovies();
    }, [])

    const renderMovies = () => {
        return movies.map(movie => {
            return <Alert  key={movie.id} variant="info" className="float-right">
                {movie.title}
            </Alert>;
        })
    }


    return (
    <div>{renderMovies()}</div>
        )
}

export default Favourites;