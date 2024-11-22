import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovieDetails } from '../actions/movieActions';
import { useParams } from 'react-router-dom';

export default function MovieDetails() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { movieDetails, loading, error } = useSelector((state) => state.movies);

    useEffect(() => {
        dispatch(fetchMovieDetails(id));
    }, [dispatch, id]);

    if (loading)
        return (
            <div className="text-center my-5">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );

    if (error)
        return (
            <div className="text-center my-5 text-danger">
                <p>Error: {error}</p>
            </div>
        );

    return (
        <div className="container w-75 my-5">
            <div className="row border rounded p-1 py-3">
                <div className="col-md-5">
                    <img
                        src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
                        alt={movieDetails.title}
                        className="img-fluid rounded"
                    />
                </div>
                <div className="col-md-7 text-start">
                    <h2>{movieDetails.title}</h2>
                    <p>{movieDetails.overview}</p>
                    <p><strong>Release Date:</strong> {movieDetails.release_date}</p>
                    <p><strong>Genres:</strong> {movieDetails.genres?.map((g) => g.name).join(', ')}</p>
                    <p><strong>Rating:</strong> {movieDetails.vote_average}/10</p>
                </div>
            </div>
        </div>
    );
}
