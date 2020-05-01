import React, { useState, useEffect } from 'react';
import axios from 'axios';
import getLocation from '../../locationServices.js'
import {DisplayMapFC} from './map/DisplayMapClass';
import BusinessCard from './businessCard.component';
import './homepage.css';
import PersonList from './test';

const HomePage = () => { 

  // Getting Location
  const [coords, setCoords] = useState({
    lat: false,
    lng: false,
  });

  // Initializing default radius
  const [radius, setRadius] = useState(15);

  const [businesses, setBusinesses] = useState([]);

  useEffect(() => {
    getLocation.then((results) => {
      // setCoords({ lat: results.lat, lng: results.long })
      // Setting a dummy location:
      setCoords({ lat: 39.7059, lng: -75.1808 })

      axios({
        method: 'GET',
        url: 'http://localhost:3000/api/v1/businesses',
        params: {
          "radius": radius,
          "lat": coords.lat,
          "lng": coords.lng
        }
      })
        .then(res => {
          setBusinesses(res.data);
          //console.log(res.data);
        })
    })
  }, [coords, radius]);

// Example mock data for proper formatting
let demoBusinesses = [
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
        { businesses.length !== 0 ? businesses.map((business) => <BusinessCard business={business} /> ) : null }
      </div>
        { coords.lat && coords.lng && businesses.length !== 0 ? <DisplayMapFC coords={coords} businesses={businesses}/> : null }
      <div className="MobileBusinessList">
        { businesses.length !== 0 ? businesses.map((business) => <BusinessCard business={business} /> ) : null }
      </div>
    </div>
  );
};

export default HomePage;