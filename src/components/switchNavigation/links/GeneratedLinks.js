import React from 'react';
import { Link } from 'react-router-dom';

const GeneratedLinks = (routes) => {

    const subRoutes = routes.routes
    if (subRoutes === undefined) {
        return ""
    }

    return (
        <ul className="headerLinkUL">
            {subRoutes.map((route, index) => <Link to={route.path} key={index}><li> {route.link} </li></Link>)}
        </ul>
    )
}
 
export default GeneratedLinks;