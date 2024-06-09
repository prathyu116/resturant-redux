import { configureStore } from '@reduxjs/toolkit';
import restaurantsReducer from './restaurantsSlice';

const store = configureStore({
    reducer: {
        restaurants: restaurantsReducer
    }
});
export default store;
