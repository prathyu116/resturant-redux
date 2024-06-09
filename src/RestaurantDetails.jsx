import React from 'react';
import { useSelector } from 'react-redux';

const RestaurantDetails = () => {
    const restaurant = useSelector(state => state.restaurants.selectedRestaurant);

    return (
        <div>
            {restaurant ? (
                <>
                    <h2>{restaurant.name}</h2>
                    {/* <p>{restaurant.location}</p>
                    <p>{restaurant.description}</p> */}
                </>
            ) : (
                <p>Select a restaurant to see details</p>
            )}
        </div>
    );
};

export default RestaurantDetails;
