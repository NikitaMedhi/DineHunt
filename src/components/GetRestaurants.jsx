// Importing required libraries
import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";

//include import from another js file for location to coordinates

//const axios = require('axios').default

// Defining the GetRestaurants functional component that takes in coordinates as a prop
const GetRestaurants = ({ coordinates }) => {
  // Setting the initial state of restaurants to an empty array
  const [restaurants, setRestaurants] = useState([])
  // Using the useEffect hook to make an API call using axios and the RapidAPI service
  useEffect(() => {
    if (coordinates.lat && coordinates.lon) {
      const options = {
        method: 'GET',
        url: 'https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng',
        params: {
          latitude: coordinates.lat,
          longitude: coordinates.lon,
          limit: '50',
          // currency: 'USD',
          distance: '2',
          // open_now: 'false',
          // lunit: 'km',
          // lang: 'en_US'
        },
        headers: {
          'X-RapidAPI-Key': '123b083e7bmshd330d9562f79b6ep1bb142jsn7aaad90d7441',
          'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
        }
      };
      // Making the API call using axios, filtering the reponse data to include only restaurants with a name, and setting the state using setRestaurants
      axios.request(options).then(function (response) {
        // Logging the response data to the console
        console.log(response.data)
        // Setting the state of restaurants to the filtered data
        const filteredData = response.data.data.filter((restaurant) => restaurant.name)
        setRestaurants(filteredData)
        // Logging any errors to the console
      }).catch(function (error) {
        console.error(error);
      });
    }
  }, [coordinates])

  // Defining the animation effects using motion variants
  const cardVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  // Returning the JSX code to display the list of restaurants
  return (
    <div className="p-16 bg-[#E9F5DB]">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
        {restaurants.map((restaurant, index) => (
          <motion.div
            key={index}
            className="restaurant bg-gradient-to-r from-[#D8F3DC] to-[#B7E4C7] p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
            initial="hidden"
            animate="visible"
            variants={cardVariant}
            transition={{ duration: 1.0 }}
          >
            <h3 className="font-semibold text-2xl text-[#081C15] mb-2">{restaurant.name}</h3>
            <p className="text-[#081C15] mb-2">
              <span className="font-medium">Address:</span>
              <span className="float-right">{restaurant.address}</span>
            </p>
            <p className="text-[#081C15] mb-2">
              <span className="font-medium">Phone:</span>
              <a
                href={`tel:${restaurant.phone}`}
                className="float-right text-blue-400 hover:text-blue-500"
              >
                {restaurant.phone}
              </a>
            </p>
            {/*<p className="text-[#081C15] mb-2">
              //<span className="font-medium">Rating:</span>
             // <span className="float-right">{restaurant.rating}</span>
        </p>*/}
            {restaurant.website && (
              <p className="mt-2">
                <a
                  href={restaurant.website}
                  className="text-[#081C15] hover:text-[#40916C]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Website
                </a>
              </p>
            )}
          </motion.div>
        ))}
      </div>
    </div>


  )
}
export default GetRestaurants

   //'X-RapidAPI-Key': '96d3145458msh88398ed9642d141p10ef6ajsne53e90f42611',