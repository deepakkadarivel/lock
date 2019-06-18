import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import HomeContainer from '../home/container';
import PeopleContainer from '../people/container';
import DoorsContainer from '../doors/container';
import EventsContainer from '../events/container';
import NotFound from '../../components/notFound/index';
import './style.scss';
import Links from '../../components/links';

const routing = (
    <Router>
        <div>
            <Links />
            <div className="App-content">
                <Switch>
                    <Route exact path="/" component={HomeContainer} />
                    <Route path="/people" component={PeopleContainer} />
                    <Route path="/doors" component={DoorsContainer} />
                    <Route path="/events" component={EventsContainer} />
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
