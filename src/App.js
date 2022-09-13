import './App.css';
import Navbar from './components/Navbar';
import Navbar2 from './components/Navbar2';
import "bootstrap/dist/css/bootstrap.min.css";
import Column1 from './components/Column1';
import Column2 from './components/Column2';
import Column3 from './components/Column3';

function App() {
  return (
    <div className='App'>
    <Navbar/>
    <Navbar2/>
    <Column1/>
    <Column2/>
    <Column3/>
    </div>
  );
}

export default App;
