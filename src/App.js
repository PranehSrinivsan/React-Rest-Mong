import './App.css';
import Head from './componnets/Head'
import Cities from './componnets/Cities';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Head/>
      </header>
      <div className="cities.container">
        <Cities/>
      </div>
    </div>
  );
}

export default App;
