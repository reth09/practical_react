import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers'; // Combine your reducers into this

const store = configureStore({
    reducer: rootReducer, // Add your reducers here
});

export default store;
