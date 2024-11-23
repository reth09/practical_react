import { combineReducers, configureStore } from '@reduxjs/toolkit';
import movieReducer from './reducers/movieReducer';

const rootReducer = combineReducers({
    movies: movieReducer,
});

const store = configureStore({
    reducer: rootReducer,
});

export default store;
