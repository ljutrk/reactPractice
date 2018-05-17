import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Error404 from './Error404';
import GeneratedLinks from './links/GeneratedLinks';

const getMainRoutes = (routes) => {

    return (
        <Switch>
            {routes.map((route, index) => <Route path={route.path} key={index} component={route.component} />)}
            <Route component={Error404} />
        </Switch>
    );
}

const getHeaderRoutes = (routes) => {

    return (
        <Switch>
            {routes.map((element, i) => {
                return <Route path={element.path} key={i} i={i} render={() => {
                    return <GeneratedLinks {...routes[i]} />
                }} />
            })}
        </Switch>
    );
}

const getHeaderLinks = (routes) => {

    return (
        <ul className="headerLinkUL">
            {routes.map((route, index) => <Link to={route.path} key={index}><li> {route.link} </li></Link>)}
        </ul>
    );
}

export { getMainRoutes, getHeaderRoutes, getHeaderLinks }