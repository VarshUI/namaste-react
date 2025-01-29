import React from "react";
import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurant] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [showTopRated, setShowTopRated] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();

      // Find the correct card that contains restaurant data
      const restaurantCard = json?.data?.cards?.find(
        (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );

      const restaurants =
        restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants ||
        [];

      console.log("Found restaurants:", restaurants.length); // Debug log
      setListOfRestaurant(restaurants);
      setFilteredRestaurants(restaurants);
    } catch (error) {
      console.error("Error fetching restaurants:", error);
    }
  };

  const handleTopRatedClick = () => {
    setShowTopRated(!showTopRated);
    if (!showTopRated) {
      const topRated = listOfRestaurants.filter(
        (res) => res.info.avgRating > 4.2
      );
      setFilteredRestaurants(topRated);
    } else {
      setFilteredRestaurants(listOfRestaurants);
    }
  };

  return (
    <div className="body">
      <div className="filter">
        <button
          className={`filter-btn ${showTopRated ? "active" : ""}`}
          onClick={handleTopRatedClick}
        >
          {showTopRated ? "Show All Restaurants" : "Show Top Rated"}
        </button>
      </div>
      <div className="res-container">
        {Array.isArray(filteredRestaurants) &&
        filteredRestaurants.length > 0 ? (
          filteredRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          ))
        ) : (
          <p>No restaurants to display</p>
        )}
      </div>
    </div>
  );
};

export default Body;
