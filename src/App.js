import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Shop from './components/Shop';
import ItemDetail from './components/ItemDetail';
import Home from './components/Home';
import Cart from './components/Cart';
import Nav from './components/Nav';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
import { CartProvider } from 'react-use-cart';

function App() {
  return (
    <Router>
      <div className="App">
          <CartProvider>
            <Nav/>
          </CartProvider>
          <Routes>
            <Route  exact path='/' element={<Home/>}/>
            <Route path='/shop' exact element={<Shop/>}/>
            <Route path='/shop/:id' element={<CartProvider><ItemDetail/></CartProvider>}/>
            <Route path='/cart' element={<CartProvider><Cart/></CartProvider>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
          <Footer/>
      </div>
    </Router>
  );
}


 
export default App;
