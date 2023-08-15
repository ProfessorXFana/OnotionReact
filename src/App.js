import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from "./components/About"
import Service from './components/Service';
import Contact from './components/Contact';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import Footer from './components/Footer';

function App() {
  return (
    <div>
  <Navbar></Navbar>
  <Routes>
  <Route path='/' Component={Home}/>
  <Route path='/about' Component={About}/>
  <Route path='/service' Component={Service}/>
  <Route path='/contact' Component={Contact}/>
  </Routes>
  <Footer></Footer>
    </div>
  );
}

export default App;
