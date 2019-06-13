import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from '../home';
import People from '../people';
import Doors from '../doors';
import Events from '../events';
import NotFound from '../notFound';
import './style.scss';
import Links from '../links';

const routing = (
    <Router>
        <div>
            <Links />
            <div className="App-content">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/people" component={People} />
                    <Route path="/doors" component={Doors} />
                    <Route path="/events" component={Events} />
                    <Route component={NotFound} />
                </Switch>
            </div>
        </div>
    </Router>
);

const App = () => {
    return <div className="App">{routing}</div>;
};

export default App;
