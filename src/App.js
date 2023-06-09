
import { Container } from 'react-bootstrap';
import './App.css';
import Register from './Components/Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import Home from './Components/Home'


function App() {
  return (  
    <Container>
      {/* <Row>
        <Col xs={12} sm={12} md={6} lg={6}>
          <Register/>
        </Col>
      </Row> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Register />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/home' element={<Home />}/>
        </Routes>
      </BrowserRouter>
    </Container>  
  
  );
}

export default App;
