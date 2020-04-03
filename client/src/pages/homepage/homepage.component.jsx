import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import getLocation from '../../locationServices.js'

// Homepage Variables
const HomePage = () => { 

  // Getting Location
  const [state, setState] = useState({
    //Null Island
    lat: 0,
    long: 0
  })

  useEffect(() => {
    getLocation.then((result) => {
      setState({ lat: result.lat, long: result.long })
    })
    console.log(state.lat + "____" + state.long);
  }, [])


  return (  
    <div>
      {state.long}
      <h1>HOME PAGE</h1>
      <Link to={`/details/1`}>Business 1</Link>
      <Link to={`/details/2`}>Business 2</Link>
    </div>
  );
};

export default HomePage;