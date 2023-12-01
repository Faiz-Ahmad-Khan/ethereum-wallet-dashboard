// Data.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const Data = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    // Fetch data from the API
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        // Check if the response is an array
        if (!Array.isArray(response.data)) {
          setError('Invalid data format received from the API.');
          return;
        }

        // Filter posts for user ID 1
        const filteredPosts = response.data.filter(post => post.userId === 1);
        setPosts(filteredPosts);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setError('Error fetching data. Please try again later.');
      });
  }, []);

  // Calculate the number of posts by user ID 1
  const postsByUser1 = posts.length;

  // Prepare data for pie chart
  const data = [
    { name: 'User 1', value: postsByUser1 },
    { name: 'Others', value: posts.length - postsByUser1 },
  ];

  const COLORS = ['#0088FE', '#00C49F'];

  return (
    <div className="container mt-5">
      <h2 className="text-center">Data Page</h2>
      {error && <p className="alert alert-danger">{error}</p>}
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {posts.map(post => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>{post.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="text-center mt-3">
        <Link to="/" className="btn btn-secondary">Back to Home</Link>
      </div>
    </div>
  );
};

export default Data;