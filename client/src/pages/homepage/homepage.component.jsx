import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>HOME PAGE</h1>
      <Link to={`/details/1`}>Business 1</Link>
      <Link to={`/details/2`}>Business 2</Link>
    </div>
  );
};

export default HomePage;