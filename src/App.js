import {
	BrowserRouter as Router,
	Route,
	Routes 
} from 'react-router-dom';
import './App.css';
import Home from './componnets/Home';
import Addhotel from './componnets/Addhotel.js';

function App() {
  return (
    <>
    <header className="App-header">
      <h3> FOODIFY </h3>
    </header>
    <div>
      <Router>
        <Routes >
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/AddHotel' element={<Addhotel />}></Route>
        </Routes >
      </Router>
    </div>
    </>
  );
}

export default App;
