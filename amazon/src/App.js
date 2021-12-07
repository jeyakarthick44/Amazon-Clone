import React, { useEffect } from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Header';
import Login from './Login';
import Checkout from './Checkout';
import Home from './Home';
import { auth } from "./Firebase";
import { useStateValue } from "./StateProvider";


function App() {

  const [{}, dispatch] = useStateValue();

  useEffect(() => {

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

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
