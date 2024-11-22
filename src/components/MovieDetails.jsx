import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovieDetails } from '../actions/movieActions';

export default function MovieDetails() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { movieDetails, loading, error } = useSelector((state) => state.movies);

    useEffect(() => {
        dispatch(fetchMovieDetails(id));
    }, [dispatch, id]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h1>{movieDetails.title}</h1>
            <p>{movieDetails.overview}</p>
        </div>
    );
}
