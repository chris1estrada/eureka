import React, { useState, useEffect } from 'react';
import getLocation from '../../locationServices.js'
import {DisplayMapFC} from './map/DisplayMapClass';
import BusinessList from './businesslist/businessList.component';
import { Card, CardContent, Typography, Fab } from '@material-ui/core';
import './homepage.css';

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

// Example mock data for proper formatting
let business = {
  name: "Burger Barn",
  address: "222 State St, Philadelphia, PA, 19146",
  phone: "(609) 456-7890",
  hours: "11am - 12am Sunday - Thursday",
  hours2: "10am - 2am Friday - Saturday",
  tags: "American, Pub",
  description: "This is the description of the business.",
  dealsTime: "Monday 3pm - 6pm",
  deals: "$2 Tacos $3 Corona",
  promosTime: "Tuesday 3pm - 6pm",
  promos: "1/2 price wings $2 domestics"
}

// { coords.lat && coords.long ? <DisplayMapFC coordinates={coords} /> : null }

  return (  
    <div>
        { coords.lat && coords.long ? <DisplayMapFC coordinates={coords} /> : null }
        <BusinessList />
    </div>
  );
};

export default HomePage;