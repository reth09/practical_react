import { combineReducers } from "redux";
import movieReducer from "./movieReducer";
import authReducer from './authReducer';


export default combineReducers({movies: movieReducer, auth: authReducer,});
