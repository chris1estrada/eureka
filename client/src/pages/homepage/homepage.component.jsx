import React, { useState, useEffect } from 'react';
import getLocation from '../../locationServices.js'
import {DisplayMapFC} from './map/DisplayMapClass';
import BusinessCard from './businessCard.component';
import './homepage.css';
import PersonList from './test';

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

// Setting a dummy location:
const demoCoords = { lat: 39.7059, long: -75.1808};

// Example mock data for proper formatting
let businesses = [
  {
    business_id:  1,
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
    business_id:  2,
    name:         "El Mariachi Mexican Restaurant",
    address:      "512 Delsea Dr, Glassboro, NJ 08028",
    cuisine:      "Mexican",
    lat:          null,
    long:         null,
    image:        null,
    distance:     null,
  }, 
  
  {
    business_id:  2,
    name:         "El Mariachi Mexican Restaurant",
    address:      "512 Delsea Dr, Glassboro, NJ 08028",
    cuisine:      "Mexican",
    lat:          null,
    long:         null,
    image:        null,
    distance:     null,
  }, 
  
  {
    business_id:  2,
    name:         "El Mariachi Mexican Restaurant",
    address:      "512 Delsea Dr, Glassboro, NJ 08028",
    cuisine:      "Mexican",
    lat:          null,
    long:         null,
    image:        null,
    distance:     null,
  }, 
  
  {
    business_id:  2,
    name:         "El Mariachi Mexican Restaurant",
    address:      "512 Delsea Dr, Glassboro, NJ 08028",
    cuisine:      "Mexican",
    lat:          null,
    long:         null,
    image:        null,
    distance:     null,
  }, 
  
  {
    business_id:  2,
    name:         "El Mariachi Mexican Restaurant",
    address:      "512 Delsea Dr, Glassboro, NJ 08028",
    cuisine:      "Mexican",
    lat:          null,
    long:         null,
    image:        null,
    distance:     null,
  }, 
  
  {
    business_id:  2,
    name:         "El Mariachi Mexican Restaurant",
    address:      "512 Delsea Dr, Glassboro, NJ 08028",
    cuisine:      "Mexican",
    lat:          null,
    long:         null,
    image:        null,
    distance:     null,
  }, 
];



  return (  
    <div className="HomepageComponent">
      <PersonList />
      <div className="DesktopBusinessList">
        { businesses.map((business) => <BusinessCard business={business} /> )}
      </div>
        { coords.lat && coords.long ? <DisplayMapFC coordinates={demoCoords} /> : null }
      <div className="MobileBusinessList">
        { businesses.map((business) => <BusinessCard business={business} /> )}
      </div>
    </div>
  );
};

export default HomePage;