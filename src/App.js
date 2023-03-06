import logo from './logo.svg';
import './App.css';
// Importing components:
import Navbar from './components/Header/index'
import Biopage from './components/Biopage';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Biopage />
    </div>
  );
}

export default App;
