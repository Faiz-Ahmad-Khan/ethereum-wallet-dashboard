// Transaction.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Transaction = () => {
  const [walletAddress, setWalletAddress] = useState('');
  const [amount, setAmount] = useState('');
  const [error, setError] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Wallet address validation
    if (!walletAddress.trim()) {
      setError('Wallet address cannot be empty.');
      return;
    } else if (!/^0x[a-fA-F0-9]{40}$/.test(walletAddress)) {
      setError('Invalid Ethereum address format.');
      return;
    }

    // Amount validation
    const parsedAmount = parseFloat(amount);
    if (isNaN(parsedAmount) || parsedAmount < 0 || parsedAmount > 10000) {
      setError('Amount must be a number between 0 and 10,000.');
      return;
    }

    // Handle successful submission (bonus: send data to Firestore)
    setError('');
    // Add your Firestore logic here
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Transaction Page</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="mb-3">
          <label htmlFor="walletAddress" className="form-label">Wallet Address:</label>
          <input
            type="text"
            id="walletAddress"
            value={walletAddress}
            onChange={(e) => setWalletAddress(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="amount" className="form-label">Amount:</label>
          <input
            type="text"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      {error && <p className="alert alert-danger mt-3">{error}</p>}
      <div className="text-center mt-3">
        <Link to="/" className="btn btn-secondary">Back to Home</Link>
      </div>
    </div>
  );
};

export default Transaction;