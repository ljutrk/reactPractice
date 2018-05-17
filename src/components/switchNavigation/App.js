import React, { Component, Fragment } from 'react';
import Header from './Header';
import Main from './Main';
import './App.css';
// import { routes } from './routes';

class App extends Component {

    render() {
        return (
            <Fragment>
                <Header />
                <Main />
            </Fragment>
        );
    }
}

export default App;