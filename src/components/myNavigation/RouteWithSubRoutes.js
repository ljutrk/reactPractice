import React from 'react';
import { Route } from 'react-router-dom';

const RouteWithSubRoutes = route => {
    
    return (
        <div className="subMenu">
            <Route
                path={route.path}
                render={props => <route.component {...props} routes={route.routes} link={route.link} />} />
        </div>
    );
}

export default RouteWithSubRoutes;