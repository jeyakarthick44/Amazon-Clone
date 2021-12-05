import './App.css';
import { Routes, Route} from 'react-router-dom'
import Header from './Header';
import Login from './Login';
import Checkout from './Checkout';

function App() {
  return (
    <div>
<Routes>
  <Route  exact path="/" />
  <Route path="/checkout" element={<Checkout />} exact />
  <Route path="/login" element={<Login />}exact />
</Routes>
<Header />
  </div>
  );
}

export default App;
