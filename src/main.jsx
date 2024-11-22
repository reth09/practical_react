import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';
import './App.css';
import { createRoot } from 'react-dom/client';

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <Router>
            <App /> 
        </Router>
    </Provider>,
);