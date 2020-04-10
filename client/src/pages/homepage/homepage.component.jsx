import React, { useState, useEffect } from 'react';
import getLocation from '../../locationServices.js'
import {DisplayMapFC} from './map/DisplayMapClass';
import BusinessCard from './businessCard.component';
import './homepage.css';

const HomePage = () => { 

  // Getting Location
  const [coords, setCoords] = useState({
    lat: false,
    long: false
  });

  useEffect(() => {
    getLocation.then((results) => {
      setCoords({ lat: results.lat, long: results.long })
    })
  }, []);

// Example mock data for proper formatting
let businesses = [
  {
    name:         "Burger Barn",
    address:      "222 State St, Philadelphia, PA, 19146",
    phone:        "(609) 456-7890",
    hours:        "11am - 12am Sunday - Thursday",
    hours2:       "10am - 2am Friday - Saturday",
    tags:         "American, Pub",
    description:  "This is the description of the business.",
    dealsTime:    "Monday 3pm - 6pm",
    deals:        "$2 Tacos $3 Corona",
    promosTime:   "Tuesday 3pm - 6pm",
    promos:       "1/2 price wings $2 domestics"
  },

  {
    name:         "El Mariachi Mexican Restaurant",
    address:      "512 Delsea Dr, Glassboro, NJ 08028",
    phone:        "(856) 243-5902",
    hours:        "10am - 11pm Sunday - Saturday",
    hours2:       "10am - 9pm Sunday",
    tags:         "Mexican",
    description:  "This is the description of the business.",
  },

  {
    name:         "El Mariachi Mexican Restaurant",
    address:      "512 Delsea Dr, Glassboro, NJ 08028",
    phone:        "(856) 243-5902",
    hours:        "10am - 11pm Sunday - Saturday",
    hours2:       "10am - 9pm Sunday",
    tags:         "Mexican",
    description:  "This is the description of the business.",
  },

  {
    name:         "El Mariachi Mexican Restaurant",
    address:      "512 Delsea Dr, Glassboro, NJ 08028",
    phone:        "(856) 243-5902",
    hours:        "10am - 11pm Sunday - Saturday",
    hours2:       "10am - 9pm Sunday",
    tags:         "Mexican",
    description:  "This is the description of the business.",
  },

  {
    name:         "El Mariachi Mexican Restaurant",
    address:      "512 Delsea Dr, Glassboro, NJ 08028",
    phone:        "(856) 243-5902",
    hours:        "10am - 11pm Sunday - Saturday",
    hours2:       "10am - 9pm Sunday",
    tags:         "Mexican",
    description:  "This is the description of the business.",
  },

  {
    name:         "El Mariachi Mexican Restaurant",
    address:      "512 Delsea Dr, Glassboro, NJ 08028",
    phone:        "(856) 243-5902",
    hours:        "10am - 11pm Sunday - Saturday",
    hours2:       "10am - 9pm Sunday",
    tags:         "Mexican",
    description:  "This is the description of the business.",
  },

  {
    name:         "El Mariachi Mexican Restaurant",
    address:      "512 Delsea Dr, Glassboro, NJ 08028",
    phone:        "(856) 243-5902",
    hours:        "10am - 11pm Sunday - Saturday",
    hours2:       "10am - 9pm Sunday",
    tags:         "Mexican",
    description:  "This is the description of the business.",
  },

  {
    name:         "El Mariachi Mexican Restaurant",
    address:      "512 Delsea Dr, Glassboro, NJ 08028",
    phone:        "(856) 243-5902",
    hours:        "10am - 11pm Sunday - Saturday",
    hours2:       "10am - 9pm Sunday",
    tags:         "Mexican",
    description:  "This is the description of the business.",
  },

  {
    name:         "El Mariachi Mexican Restaurant",
    address:      "512 Delsea Dr, Glassboro, NJ 08028",
    phone:        "(856) 243-5902",
    hours:        "10am - 11pm Sunday - Saturday",
    hours2:       "10am - 9pm Sunday",
    tags:         "Mexican",
    description:  "This is the description of the business.",
  },

  {
    name:         "El Mariachi Mexican Restaurant",
    address:      "512 Delsea Dr, Glassboro, NJ 08028",
    phone:        "(856) 243-5902",
    hours:        "10am - 11pm Sunday - Saturday",
    hours2:       "10am - 9pm Sunday",
    tags:         "Mexican",
    description:  "This is the description of the business.",
  },

  {
    name:         "El Mariachi Mexican Restaurant",
    address:      "512 Delsea Dr, Glassboro, NJ 08028",
    phone:        "(856) 243-5902",
    hours:        "10am - 11pm Sunday - Saturday",
    hours2:       "10am - 9pm Sunday",
    tags:         "Mexican",
    description:  "This is the description of the business.",
  },
  
];

  return (  
    <div className="HomepageComponent">
      <div className="DesktopBusinessList">
      { businesses.map((business) => <BusinessCard business={business} /> )}
      </div>
      { coords.lat && coords.long ? <DisplayMapFC coordinates={coords} /> : null }
      <div className="MobileBusinessList">
      { businesses.map((business) => <BusinessCard business={business} /> )}
      </div>
    </div>
  );
};

export default HomePage;