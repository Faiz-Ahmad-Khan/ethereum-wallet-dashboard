// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Transaction from './Transaction';
import Data from './Data';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/transaction" element={<Transaction />} />
        <Route path="/data" element={<Data />} />
      </Routes>
    </Router>
  );
}

export default App;