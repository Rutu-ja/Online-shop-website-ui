import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Componet/Home'
import Login from './Componet/Login'
import Register from './Componet/Register';
import Navbar from './Componet/Navbar';
import Footer from './Componet/Footer';
import Products from './Componet/Products';
import New_arraivals from './Componet/New_arraivals';
import Headphones from './Componet/Headphones';
import Boots from './Componet/Boots';
import Jewellary from './Componet/Jewellary';
import Cart from './Componet/Cart';
import Whislist from './Componet/Whislist';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Footer/>
        <Routes>
          <Route path='/' element={<Home/>}>Home</Route>
          <Route path='/Login' element={<Login/>}>Login</Route>
          <Route path='/Register' element={<Register/>}>Register</Route>
          <Route path='/Product' element={<Products/>}>Product</Route>
          <Route path='/Whislist' element={<Whislist/>}>Whishlist</Route>
          <Route path='/Cart' element={<Cart/>}>Cart</Route>
          <Route path='/New_arraivals' element={<New_arraivals/>}>New arrivals</Route>
          <Route path='/Headphone' element={<Headphones/>}>Headphones</Route>
          <Route path='/Boot' element={<Boots/>}>Boots</Route>
          <Route path='/jewellary' element={<Jewellary/>}>Jewellary</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
