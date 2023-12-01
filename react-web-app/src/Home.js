// Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="text-center">
        <h2>Home Page</h2>
        <p>Welcome to the home page!</p>
        <nav className="mb-3">
          <ul className="list-group">
            <li className="list-group-item">
              <Link to="/transaction" className="btn btn-primary">Go to Transaction Page</Link>
            </li>
            <li className="list-group-item">
              <Link to="/data" className="btn btn-success">Go to Data Page</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Home;