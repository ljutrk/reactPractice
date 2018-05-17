import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import Ljuba from './home/Ljuba';
import Marija from './home/Marija';
import Darko from './home/Darko';
import Error404 from './Error404';

const Home = () => {

    return (
        <div>
            <Switch>
                <Route exact path="/home" render={() => {
                    return (
                        <div>
                            <h1>Home!</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequatur quia explicabo dolore mollitia est, illum qui sint dolores atque eveniet ab quis necessitatibus, velit, voluptas dolor ipsa debitis natus.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequatur quia explicabo dolore mollitia est, illum qui sint dolores atque eveniet ab quis necessitatibus, velit, voluptas dolor ipsa debitis natus.</p>
                        </div>

                    )
                }} />
                <Route exact path="/home/marija" component={Marija} />
                <Route exact path="/home/darko" component={Darko} />
                {/* <Route exact path="/home/ljuba" component={Ljuba} /> */}
                <Route component={Error404} />
            </Switch>
        </div>
    );
}

export default Home;