import React, { Component } from 'react';
import { routes } from './routes';
import { getMainRoutes } from './utils';
class Main extends Component {

    render() {
        
        return (
            <div className="mainContainer">
                {getMainRoutes(routes)}
            </div>
        );
    }
}

export default Main;