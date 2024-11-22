import { fetchPopularMoviesAPI, fetchMovieDetailsAPI, searchMoviesAPI } from '../utils/api';

const FETCH_MOVIES = 'FETCH_MOVIES';
const FETCH_MOVIE_DETAILS = 'FETCH_MOVIE_DETAILS';
const LOADING = 'LOADING';
const ERROR = 'ERROR';

const fetchMovies = (movies) => ({ type: FETCH_MOVIES, payload: movies });
let fetchMovieDetails = (details) => ({ type: FETCH_MOVIE_DETAILS, payload: details });
const setLoading = () => ({ type: LOADING });
const setError = (error) => ({ type: ERROR, payload: error });

const fetchPopularMovies = () => async (dispatch) => {
    dispatch(setLoading());
    try {
        const response = await fetchPopularMoviesAPI();
        dispatch(fetchMovies(response.data.results));
    } catch (error) {
        dispatch(setError(error.message));
    }
};

fetchMovieDetails = (movieId) => async (dispatch) => {
    dispatch(setLoading());
    try {
        const response = await fetchMovieDetailsAPI(movieId);
        dispatch(fetchMovieDetails(response.data));
    } catch (error) {
        dispatch(setError(error.message));
    }
};

const searchMovies = (query) => async (dispatch) => {
    dispatch(setLoading());
    try {
        const response = await searchMoviesAPI(query);
        dispatch(fetchMovies(response.data.results));
    } catch (error) {
        dispatch(setError(error.message));
    }
};


export {FETCH_MOVIES,FETCH_MOVIE_DETAILS,LOADING, ERROR, fetchMovies,fetchMovieDetails,setLoading, setError, fetchPopularMovies, searchMovies}