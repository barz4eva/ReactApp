
import { Col, Container, Row } from 'react-bootstrap';
import './App.css';
import ClassComponent from "./components/ClassComponent";
import FunctionComponent from './components/FunctionComponent';
import NavBar from './components/NavBar';


function App() {
  document.body.style.backgroundColor = "gray";
  return (
    <div bg="dark" className="App">
      <Container>
      <NavBar />
      </Container>
      <Container fluid>
        <Row>
          <Col md={4} className="mt-3">
      <ClassComponent/>
      <ClassComponent/>
      <ClassComponent/>
         </Col>
         <Col md={4} className="mt-3">
         <FunctionComponent />
         </Col>
         <Col md={4} className="mt-3">
         <FunctionComponent />
         </Col>
        </Row>
      </Container>
      
    </div>
  );
}

export default App;
