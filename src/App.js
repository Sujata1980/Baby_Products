import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Layout from './components/Layout';
import ProductListing from './pages/ProductListing';
import ProductDetail from './pages/ProductDetail';
import { CartProvider } from './context/CartContext';
import { ToastContainer } from 'react-toastify';
import Cart from './pages/Cart';


function App() {
  return (
    <CartProvider>
    <Router>
      <Routes>
        <Route element={<Layout/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/:category" element={<ProductListing/>}/>
        <Route path="/:category/:id" element={<ProductDetail/>}/>
        <Route path="/cart" element={<Cart/>}/>
        </Route>
      </Routes>
      <ToastContainer position="top-center" autoClose={2000}/>      
    </Router>
    </CartProvider>
  );
}

export default App;
