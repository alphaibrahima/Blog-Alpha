import './App.css';
import Navbar from './Navbar';
import Home from './Home';

function App() {
  // la partie logique

  /*
    les seuls variables qui ne sont pas accepté est le objets et les booleans
  */

  // la partie template
  return (
    <div className="App">
      <Navbar />
      <div className="contenu">
        <Home />
      </div>
    </div>
  );
}

export default App;
