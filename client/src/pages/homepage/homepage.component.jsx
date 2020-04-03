
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Location from '../../locationServices.js'

// Homepage Variables
const [lat, lng] = [<Location />]

const HomePage = () => { 
  const [] = useState ([])
  return (
    <div>
      {lat}
      {lng}
      <h1>HOME PAGE</h1>
      <Link to={`/details/1`}>Business 1</Link>
      <Link to={`/details/2`}>Business 2</Link>
    </div>
  );
};

export default HomePage;