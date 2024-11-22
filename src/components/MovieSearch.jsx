import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchMovies } from "../actions/movieActions";

import React from 'react'

function MovieSearch() {
    const [query, setQuery] = useState
    const dispatch = useDispatch();

    const handleSearch = () => dispatch(searchMovies(query))
    return (
        <>
            <div>
                <input
                    type="text"
                    value={query}
                    onChange={(e)=>setQuery(e.target.value)}
                    placeholder="Search"
                />
                <button onClick={handleSearch}>Search</button>
            </div>
        </>
    )
}

export default MovieSearch

/*
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchMovies } from '../actions/movieActions';

export default function MovieSearch() {
    const [query, setQuery] = useState('');
    const dispatch = useDispatch();

    const handleSearch = () => dispatch(searchMovies(query));

    return (
        <div>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search movies..."
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
}

*/