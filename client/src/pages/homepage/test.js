import React from 'react';
import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    persons: []
  }
 
  componentDidMount() {
    axios.get(`http://localhost:3000/api/v1/businesses`,
    {
    "radius": 15,
    "lat": 39.7059,
    "lng": -75.1808,
    })
    .then(res => {
      console.log(res);
    })
  }

  render() {
    return (
    <div></div>
    )
  }
}