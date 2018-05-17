import React from 'react';
import { Route, Switch } from 'react-router-dom';
import BitBook from './projects/BitBook';
import BitBlog from './projects/BitBlog';
import BitTube from './projects/BitTube';
import Error404 from './Error404';

const Projects = () => {

    return (
        <div>
            <Switch>
                <Route exact path="/projects" render={() => {
                    return (
                        <div>
                            <h1>Projects!</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequatur quia explicabo dolore mollitia est, illum qui sint dolores atque eveniet ab quis necessitatibus, velit, voluptas dolor ipsa debitis natus.</p>
                        </div>
                    )
                }} />
                <Route exact path="/projects/BitBook" component={BitBook} />
                <Route exact path="/projects/BitTube" component={BitTube} />
                <Route exact path="/projects/BitBlog" component={BitBlog} />
                <Route component={Error404} />
            </Switch>
        </div>
    );
}

export default Projects;