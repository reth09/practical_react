import { fetchPopularMoviesAPI, fetchMovieDetailsAPI, searchMoviesAPI } from '../utils/api';
import axios from 'axios';



const FETCH_MOVIES = 'FETCH_MOVIES';
const FETCH_MOVIE_DETAILS = 'FETCH_MOVIE_DETAILS';
const LOADING = 'LOADING';
const ERROR = 'ERROR';
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
const SEARCH_MOVIES = 'SEARCH_MOVIES';

const fetchMovies = (movies) => ({ type: FETCH_MOVIES, payload: movies });
let fetchMovieDetails = (details) => ({ type: FETCH_MOVIE_DETAILS, payload: details });
const setLoading = () => ({ type: LOADING });
const setError = (error) => ({ type: ERROR, payload: error });
const login = () => ({ type: LOGIN });
const logout = () => ({ type: LOGOUT });

const fetchPopularMovies = () => async (dispatch) => {
    dispatch(setLoading());
    try {
        const response = await fetchPopularMoviesAPI();
        dispatch(fetchMovies(response.data.results));
    } catch (error) {
        dispatch(setError(error.message));
    }
};

fetchMovieDetails = (id) => async (dispatch) => {
    dispatch({ type: 'MOVIE_DETAILS_REQUEST' });
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=653f60d0b16e47ad33dd9ad4fe52f827`);
        dispatch({ type: 'MOVIE_DETAILS_SUCCESS', payload: response.data });
    } catch (error) {
        dispatch({ type: 'MOVIE_DETAILS_FAIL', payload: error.message });
    }
};

const searchMovies = (query) => async (dispatch) => {
    dispatch(setLoading());
    try {
        const response = await searchMoviesAPI(query);
        dispatch({ type: SEARCH_MOVIES, payload: response.data.results });
    } catch (error) {
        dispatch(setError(error.message));
    }
};


export {FETCH_MOVIES,FETCH_MOVIE_DETAILS,LOADING, ERROR, fetchMovies,fetchMovieDetails,setLoading, setError, fetchPopularMovies, SEARCH_MOVIES, searchMovies, LOGIN, LOGOUT, login, logout}