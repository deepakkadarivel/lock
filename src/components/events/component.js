import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from '../card';
import t from '../../translation';

class Events extends Component {
    componentDidMount() {
        const { loadEvents } = this.props;
        loadEvents();
    }

    render() {
        const { events } = this.props;

        return (
            <div>
                <h1>{t('nav.events')}</h1>
                {events.map(event => (
                    <Card
                        icon="update"
                        text={event.event}
                        subText={event.time.toString()}
                        key={event.id}
                        onClick={() => {}}
                    />
                ))}
            </div>
        );
    }
}

Events.propTypes = {
    events: PropTypes.array.isRequired,
    loadEvents: PropTypes.func.isRequired
};

export default Events;
