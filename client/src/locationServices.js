import React from 'react';
import { Component } from 'react';

// This class definition is a React.Component so that we
// can use it in multiple places for the app.

const getLocation = new Promise((resolve, reject) => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        console.log(latitude, longitude)
        resolve({ lat: latitude, long: longitude })
      }
    )
  }
})
export default getLocation