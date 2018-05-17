import React from 'react';
import { Link } from 'react-router-dom';
import RouteWithSubRoutes from './RouteWithSubRoutes';

const Home = ({ routes }) => {

    return (
        <div>
            <ul className="secondNavList">
                {routes.map((route, index) => <Link to={route.path} key={index}><li>{route.link}</li></Link>)}
            </ul>
            <br />
            {routes.map((route, index) => <RouteWithSubRoutes key={index} {...route} />)}
        </div>
    );
}

export default Home;