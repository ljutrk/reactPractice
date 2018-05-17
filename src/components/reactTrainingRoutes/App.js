import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { routes } from './constants';
import { RouteWithSubRoutes } from './RouteWithSubRoutes';

class App extends Component {

    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to="/tacos">Tacos</Link>
                        </li>
                        <li>
                            <Link to="/sandwiches">Sandwiches</Link>
                        </li>
                    </ul>
    
                    {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
                </div>
            </Router>
        )
    }
}

export default App;