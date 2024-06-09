import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk to fetch restaurants with pagination
export const fetchRestaurants = createAsyncThunk(
    'restaurants/fetchRestaurants',
    async ({ page = 1}) => {
        const response = await axios.get(`http://localhost:3000/restaurants?_page=${page}&_per_page=3`);
        console.log("-------?", response)
        return {
            data: response.data.data,
            total: parseInt(response.headers['x-total-count'], 10)
        };
    }
);

const restaurantsSlice = createSlice({
    name: 'restaurants',
    initialState: {
        list: [],
        filteredList: [],
        selectedRestaurant: null,
        status: 'idle',
        error: null,
        currentPage: 1
    },
    reducers: {

        searchByName: (state, action) => {
            state.filteredList = state.list.filter(
                restaurant => restaurant.name?.toLowerCase().includes(action.payload.toLowerCase())
            );
        },

        selectRestaurant: (state, action) => {
            state.selectedRestaurant = state.list.find(restaurant => restaurant.id === action.payload);
        },
        clearSearch: (state) => {
            state.filteredList = state.list;
        },
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload;
        }
    },
    extraReducers: (builder) => {
        console.log("bbbbbbbbbbbbbb",builder)
        builder
            .addCase(fetchRestaurants.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchRestaurants.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.list = action.payload.data;
                state.filteredList = action.payload.data;
            })
            .addCase(fetchRestaurants.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    }
});

export const { searchByName, selectRestaurant, clearSearch, setCurrentPage } = restaurantsSlice.actions;

export default restaurantsSlice.reducer;
