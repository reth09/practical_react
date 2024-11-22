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
        <div>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    value={query}
                    onChange={handleInputChange}
                    placeholder="Search for movies..."
                    className="form-control"
                />
                <button type="submit" className="btn btn-primary">
                    Search
                </button>
            </form>
        </div>
    );
}
