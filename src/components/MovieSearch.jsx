import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchMovies } from '../actions/movieActions';

export default function MovieSearch() {
    const [query, setQuery] = useState('');
    const dispatch = useDispatch();

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        if (query.trim()) {
            dispatch(searchMovies(query));
        }
    };

    return (
        <div className="container my-4 w-25">
            <form className="d-flex border-white border rounded" onSubmit={handleSearch}>
                <input
                    type="text"
                    value={query}
                    onChange={handleInputChange}
                    placeholder="Search for movies..."
                    className="form-control rounded-end-0"
                />
                <button type="submit" className="btn btn-dark rounded-start-0 ">
                    Search
                </button>
            </form>
        </div>
    );
}
