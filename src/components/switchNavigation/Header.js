import React, { Fragment } from 'react';
import { routes } from './routes';
import { getHeaderRoutes, getHeaderLinks } from './utils';


const Header = () => {
    
    return (
        <Fragment>
                {getHeaderLinks(routes)}
            <br />
                {getHeaderRoutes(routes)}
        </Fragment>
    );
}

export default Header;