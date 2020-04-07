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
    </div>
  );
};

export default HomePage;