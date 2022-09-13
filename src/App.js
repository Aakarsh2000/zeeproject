import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import {Routes,Route, Link} from 'react-router-dom';
import Livescores from './components/Livescores';

function App() {
  return (
    <div>
    <Navbar/>
    
    <Livescores/>
    </div>
  );
}

export default App;
