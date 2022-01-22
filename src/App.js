
import { Col, Container, Row } from 'react-bootstrap';
import './App.css';
import ClassComponent from "./components/ClassComponent";
import FunctionComponent from './components/FunctionComponent';
import NavBar from './components/NavBar';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Container>
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
