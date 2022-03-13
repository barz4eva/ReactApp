import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Row, Col, Image, Alert } from "react-bootstrap";

const Favourites = props => {

    const [movies, setMovies] = useState([]);

    const fetchMovies = () => {
        axios.get('https://pixabay.com/api/?key=25921303-3c86a1505c05e32f129f1fa9b&q=yellow+flowers&image_type=photo&pretty=true')
        .then(response => {
            setMovies(response.data.hits);
        })
    }

    useEffect(() => {
        fetchMovies();
    }, [])

    const renderMovies = () => {
        return movies.map(movie => {
            return <Container fluid>
                <Col className="mt-4">
                <Image  key={movie.id} src={movie.webformatURL} />
                </Col>
        </Container>
            
        });
            }


    return (
    <div>{renderMovies()}</div>
        )
}

export default Favourites;