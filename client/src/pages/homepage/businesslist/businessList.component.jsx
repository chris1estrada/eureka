import React, { Component } from 'react'
import BusinessCard from './businessCard.component';

export default class BusinessList extends Component {
    render() {
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

            

        return (
            <div 
                className="BusinessLlist" 
                style={{
                    overflowY: "scroll",
                    height:    "calc(50vh - 64px)"
                }}
            >
                <BusinessCard business={business} />
                <BusinessCard business={business} />
                <BusinessCard business={business} />
                <BusinessCard business={business} />
                <BusinessCard business={business} />
                <BusinessCard business={business} />
                <BusinessCard business={business} />
                <BusinessCard business={business} />
                <BusinessCard business={business} />
            </div>
        )
    }
}
