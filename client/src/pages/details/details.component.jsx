import React from 'react';
import { useParams } from 'react-router-dom';


const DetailsPage = () => {
  let { bid } = useParams();
  return (
    <div>
      <h1>DETAILS PAGE {bid} </h1>
    </div>
  );
};

export default DetailsPage;