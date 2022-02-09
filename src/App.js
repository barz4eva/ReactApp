
import { Container, Row } from 'react-bootstrap';
import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Favourites from './pages/Favourites';
import MostLiked from './pages/MostLiked';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

const routes = [
  {
    path: '/',
    component: <Home/>,
    exact: true,
  },
  {
    path: 'favourites',
    component: <Favourites/>,
  },
  {
    path: 'mostLiked',
    component: <MostLiked/>,
  },
]


function App() {

  const GetRoutes = () => {
    return routes.map((route, index) => {
      return <Route
      key={index}
       exact={route}
        path={route.path}
        element={route.component}>
        
      </Route>
    })
  }

  return (
      <Router>
        <Container>
        <NavBar />
        </Container>
        <Container fluid>
          <Row className='mt-4'>
           <Routes>
             {GetRoutes()}
           </Routes>
          </Row>
        </Container>
        
      </Router>
  );
}

export default App;
