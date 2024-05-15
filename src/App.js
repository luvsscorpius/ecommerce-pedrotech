import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Navbar } from './Components/navbar';
import { GlobalStyle } from './Components/Styles';
import { Cart } from './Pages/Cart/Cart';
import { Shop } from './Pages/Shop/Shop';
import { ShopContextProvider } from './Context/ShopContext';

function App() {
  return (
    <ShopContextProvider>
      <Router>
        <GlobalStyle/>
        <Navbar/>
          <Routes>
            <Route path='/' element={<Shop/>}/>
            <Route path='/cart' element={<Cart/>}/>
          </Routes>
      </Router>
    </ShopContextProvider>
  );
}

export default App;
