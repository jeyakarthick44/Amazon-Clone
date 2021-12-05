import './App.css';
import { Routes, Route} from 'react-router-dom'
import Header from './Header';
import Login from './Login';
import Checkout from './Checkout';
import Home from './Home';

function App() {
  return (
    <div>
<Header />
<Home />
<Routes>
  <Route  exact path="/" />
  <Route path="/checkout" element={<Checkout />} exact />
  <Route path="/login" element={<Login />}exact />
</Routes>
  </div>
  );
}

export default App;
