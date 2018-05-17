import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
// import App from './components/reactTrainingRoutes/App';
// import App from './components/myNavigation/App';
import App from './components/switchNavigation/App';

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>

    , document.getElementById('root'));
