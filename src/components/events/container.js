import { connect } from 'react-redux';
import Events from './component';
import { loadEvents } from './actions';

const mapStateToProps = state => {
    return {
        events: state.events.events
    };
};

const mapDispatchToProps = {
    loadEvents
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Events);
