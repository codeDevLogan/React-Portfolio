import logo from './logo.svg';
import './App.css';
// Importing components:
import Navbar from './components/Header/index'
import Biopage from './components/Biopage';
import Projects from './components/Projects';


function App() {
  return (
    <div className=" bg App">
      <Navbar />
      <Biopage />
      <Projects />
    </div>
  );
}

export default App;
