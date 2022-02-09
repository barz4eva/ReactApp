import { Col, Container, Row } from "react-bootstrap";
import Welcome from "../components/FunctionComponent";

const Home = props => {

    document.body.style.backgroundColor = "gray";
    return (
        <Container>
            <Row>
                <Col className="mt-4">
                <Welcome />
                </Col>
                <Col className="mt-4">
                <Welcome />
                </Col>
                <Col className="mt-4">
                <Welcome />
                </Col>
            </Row>
        </Container>

        )
}

export default Home;