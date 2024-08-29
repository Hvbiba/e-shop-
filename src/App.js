import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './Components/navBar';
import Home from './Components/Home';
import Products from './Components/Products';
import Cart from './Components/Cart';
import Footer from './Components/Footer';
import Display from './Components/Product';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Products' element={<Products />} />
        <Route path='/Cart' element={<Cart />} />
        <Route path="/Products/:id" element={<Display />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
