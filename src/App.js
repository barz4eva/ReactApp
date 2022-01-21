
import { Col, Container, Row } from 'react-bootstrap';
import './App.css';
import ClassComponent from "./components/ClassComponent";


function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col md={4} className="mt-3">
      <ClassComponent/>
      <ClassComponent/>
      <ClassComponent/>
         </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
