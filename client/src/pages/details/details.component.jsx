import React from 'react';
import { useParams } from 'react-router-dom';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { Link } from 'react-router-dom';

let business = {
  name: "Burger Barn",
  address: "222 State St, Philadelphia, PA, 19146",
  phone: "123-456-7890",
  hours: "11am - 12am Sunday - Thursday",
  tags: "American, Pub",
  description: "This is the description of the business.",
  deals: "Monday 3pm - 6pm: $2 Tacos $3 Corona",
  promos: "Tuesday 3pm - 6pm: 1/2 price wings $2 domestics"
}

let images = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ38qOVpglmXDfKJq2vapG9M6bSPOA7XA7Qf0uE7WQCNJHEEVyo",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT16Y0m177smdXxETz5SlrdJ-9xz-wVoWIe5kE27IkK6YFc8MHi",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRHr0ge0k97ZMhUdML4LNrvhUez5Yr-1KEW2YHBCNnWYfOOncgZ",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSXqBMTHmbMfWaoGjd5np4NXet3fb1ANq1Cf4Ds-TS2TBtYLg3V"
]

const DetailsPage = () => {
  let { bid } = useParams();
  return (
    <div className="col-centered">
      <h1>{ business.name }</h1>

      <div className="border-carousel">
        <CarouselProvider
            naturalSlideWidth={50}
            naturalSlideHeight={8}
            totalSlides={4} >
          <Slider>
            <Slide index={0}><img src={images[0]} alt="image1" /></Slide>
            <Slide index={1}><img src={images[1]} alt="image2" /></Slide>
            <Slide index={2}><img src={images[2]} alt="image3" /></Slide>
            <Slide index={3}><img src={images[3]} alt="image4" /></Slide>
          </Slider>

          <ButtonBack>Back</ButtonBack>
          <ButtonNext>Next</ButtonNext>

        </CarouselProvider>
      </div>

      <div className="border-main">
        <div>
          <h3>Address: { business.address }</h3>
          <h3>Phone Number: { business.phone }</h3>
          <h3>Hours: { business.hours }</h3>
          <h3>Menu: <Link>menu.pdf</Link> </h3>
        </div>
        <div>
          <h3>Tags: { business.tags }</h3>
          <h3>Description: { business.description }</h3>
        </div>
        <div>
          <h3>Deals: { business.deals }</h3>
          <h3>Promos: { business.promos }</h3>
        </div>
      </div>

    </div>
  );
};

export default DetailsPage;
