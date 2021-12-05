import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Header';
import Login from './Login';
import Checkout from './Checkout';
import Home from './Home';

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/orders" element={<Header />} />
          <Route path="/login" element={<Login />} />
          <Route path="/checkout" element={<Header />,<Checkout />} />
          {/* <Route path="/payment" element={<Payment />} /> */}
          <Route exact path="/" element={<Home />} />
      </Routes>
  </Router>
    
  );
}

export default App;
