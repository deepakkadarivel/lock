import React from 'react';
import {
    Route,
    NavLink,
    BrowserRouter as Router,
    Switch
} from 'react-router-dom';
import t from '../../translation';
import Home from '../home';
import People from '../people';
import Doors from '../doors';
import Events from '../events';
import NotFound from '../notFound';

const routing = (
    <Router>
        <div>
            <ul>
                <li>
                    <NavLink exact activeClassName="active" to="/">
                        {t('nav.home')}
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" to="/people">
                        {t('nav.people')}
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" to="/doors">
                        {t('nav.doors')}
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" to="/events">
                        {t('nav.events')}
                    </NavLink>
                </li>
            </ul>
            <hr />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/people" component={People} />
                <Route path="/doors" component={Doors} />
                <Route path="/events" component={Events} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </Router>
);

const App = () => {
    return <div className="App">{routing}</div>;
};

export default App;
