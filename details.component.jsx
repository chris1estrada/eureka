import React, { Component } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Slider from 'infinite-react-carousel';
import { Card, CardContent, Typography, Fab, Grid } from '@material-ui/core';
import NavigationIcon from '@material-ui/icons/Navigation';

/*
Carousel for the business page
Contains features:
  - Dragging left or right inside the carousel
  - Clicking on the arrows on the far left and right sides
  - Clickling on the dots under and in the center of the carousel
  - Auto Scroll
*/
class CarouselSlider extends Component {
  render() {

    // Business images will be retrieved by obtaining the path name for each image that the specfied
    // business included, which will then be pushed into an array. That array will then be used to display
    // all the images into the carousel with correct formatting
    const images = [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ38qOVpglmXDfKJq2vapG9M6bSPOA7XA7Qf0uE7WQCNJHEEVyo",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT16Y0m177smdXxETz5SlrdJ-9xz-wVoWIe5kE27IkK6YFc8MHi",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRHr0ge0k97ZMhUdML4LNrvhUez5Yr-1KEW2YHBCNnWYfOOncgZ",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSXqBMTHmbMfWaoGjd5np4NXet3fb1ANq1Cf4Ds-TS2TBtYLg3V",
      "https://pngimage.net/wp-content/uploads/2018/05/burger-and-fries-png-2.png"
    ];

    // Different features for the carousel
    const settings =  {
      arrowsBlock: true,
      autoplay: true,
      autoplaySpeed: 3000,
      dots: true,
      duration: 100,
      slidesToShow: 3
    };

    // Returns the carousel with all the businesses images loaded into it
    return (
      <div>
        <span></span>
        <Slider { ...settings }>
              {images.map((value, index) => {
                return (
                <div key={ index }>
                  <img style={{maxHeight: 210, maxWidth: 210, objectFit: "fill"}} src={ value } alt={ "image"+ (index + 1) } />
                </div>
                )
            })}
        </Slider>
        <br /><h3><Link>menu.pdf</Link></h3>
      </div>
    );
  }
}

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

const DetailsPage = () => {
  let { bid } = useParams();
  return (
    <div className="col-centered">

      <div>
        <Card>
          <CardContent>
            <br />
            <Typography gutterBottom variant="h4" component="h2"  >
              {business.name}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary" component="p">
              {business.address}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary" component="p">
              {business.phone}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary" component="p">
              {business.tags}
            </Typography>
            <br/>

            <Fab color="primary" variant="extended" size="large">
              <NavigationIcon />
                Navigate
            </Fab>

          </CardContent>

          <br />

        </Card>
      </div>

      <br />
      
      <div className="border-carousel">
        <CarouselSlider />
      </div>

      <br />
      <br />

      <div>
      <Card style={{maxWidth: 1000, position: "relative", margin: "auto"}}>

        <CardContent>
          <Typography style={{fontSize: 28}} color="textPrimary" gutterBottom>
           Details
          </Typography>
        </CardContent>

        <div style={{minWidth: 950, maxWidth: 950, minHeight: 150, maxHeight: 150, marginBottom: 25, marginLeft: 25}}>

        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="h2">
                  Business Hours
                </Typography>
                <br/>
                <Typography variant="body1" component="p">
                  {business.hours} <br/>
                  {business.hours2}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="h2">
                  Deals
                </Typography>
                <br/>
                <Typography variant="body1" component="p">
                  {business.dealsTime} <br/>
                  {business.deals}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="h2">
                  Promos
                </Typography>
                <br/>
                <Typography variant="body1" component="p">
                  {business.promosTime} <br/>
                  {business.promos}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        </div>

      </Card>
      </div>

      <br />
      <div>
        <Card style={{maxWidth: 1000, position: "relative", margin: "auto"}}>

        <CardContent>
          <Typography style={{fontSize: 28}} color="textPrimary" gutterBottom>
           Description
          </Typography>
          <Typography style={{fontSize: 24}} color="textSecondary" gutterBottom>
            {business.description}
          </Typography>
        </CardContent>

        </Card>
      </div>
      <br />

    </div>
  );
};

export default DetailsPage;
