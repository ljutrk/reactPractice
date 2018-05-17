import React, { Component } from 'react';
import { Link, BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import { routes } from './routes';
import RouteWithSubRoutes from './RouteWithSubRoutes';
import ErrorPage from './ErrorPage';

class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <div>
                    <ul id="ulBRE">
                        <Link to="/Home"><li>Home</li></Link>
                        <Link to="/Projects"><li>Projects</li></Link>
                        <Link to="/About"><li>About</li></Link>
                        <Link to="/Contact"><li>Contact</li></Link>
                    </ul>
                    <br />
                    {routes.map((route, index) => {
                        return (
                            <RouteWithSubRoutes key={index} {...route} />)
                    })}
                    <div>
                        <Route path="/error" render={() => {
                            return <h1>not really a page....</h1>
                        }} />
                    </div>
                    {/* <div>
                        <Route component={ErrorPage}/>
                    </div> */}

                </div>
            </BrowserRouter>
        );
    }
}

export default App;