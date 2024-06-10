import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setCurrentPage,
  selectRestaurant,
  fetchRestaurants,
} from "./Redux/restaurantsSlice";
// import { selectRestaurant, setCurrentPage } from ".//restaurantsSlice";

const RestaurantList = () => {
  const restaurants = useSelector((state) => state.restaurants.filteredList);
  const currentPage = useSelector((state) => state.restaurants.currentPage);
  const totalPages = 4;

  const dispatch = useDispatch();

  const handleSelectRestaurant = (id) => {
    dispatch(selectRestaurant(id));
  };

  const handlePageChange = (page) => {
    // dispatch(setCurrentPage(page));
    if (page >= 1 && page <= totalPages) {
      dispatch(setCurrentPage(page));
      dispatch(fetchRestaurants(page));
    }
  };
  console.log("ffffffcurrentPageffffffff", currentPage);
  console.log("ffffffffffffff", restaurants);
  console.log("tttttttttttttttttt", totalPages);
  return (
    <div>
      <h2>Restaurants</h2>
      <ul>
        {restaurants.map((restaurant) => (
          <li
            key={restaurant.id}
            onClick={() => handleSelectRestaurant(restaurant.id)}
          >
            {restaurant.name} - {restaurant.address}
          </li>
        ))}
      </ul>

      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default RestaurantList;
