import { combineReducers } from "redux";
import movieReducer from "./movieReducer";
import 'bootstrap/dist/css/bootstrap.min.css';

export default combineReducers({movies: movieReducer});
