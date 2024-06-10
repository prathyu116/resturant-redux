import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { fetchRestaurants } from "./restaurantsSlice";
import RestaurantList from "./RestaurantList";
import RestaurantSearch from "./RestaurantSearch";
import RestaurantDetails from "./RestaurantDetails";
import { fetchRestaurants } from "./Redux/restaurantsSlice";

function App() {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.restaurants.currentPage);

  useEffect(() => {
    dispatch(fetchRestaurants(currentPage));
  }, []);

  return (
    <div>
      <h1>Restaurant Listing</h1>
      <RestaurantSearch />
      <RestaurantList />
      <RestaurantDetails />
    </div>
  );
}

export default App;
