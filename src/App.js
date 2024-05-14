import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Navbar } from './Components/navbar';
import { GlobalStyle } from './Components/Styles';
import { Cart } from './Pages/Cart/Cart';
import { Shop } from './Pages/Shop/Shop';

function App() {
  return (
      <Router>
        <GlobalStyle/>
        <Navbar/>
          <Routes>
            <Route path='/' element={<Shop/>}/>
            <Route path='/cart' element={<Cart/>}/>
          </Routes>
      </Router>
  );
}

export default App;
