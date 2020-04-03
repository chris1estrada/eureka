import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import getLocation from '../../locationServices.js'
import {DisplayMapFC} from '../../components/map/DisplayMapClass';

// Homepage Variables
const HomePage = () => { 

  // Getting Location
  const [coords, setCoords] = useState({
    lat: false,
    long: false
  })

  useEffect(() => {
    getLocation.then((results) => {
      setCoords({ lat: results.lat, long: results.long })
    })
    console.log(coords.lat + "____" + coords.long);
  }, [])


  return (  
    <div>
      { coords.lat && coords.long ? <DisplayMapFC coordinates={coords} /> : null }
      <Link to={`/details/1`}>Business 1</Link>
      <Link to={`/details/2`}>Business 2</Link>
    </div>
  );
};

export default HomePage;