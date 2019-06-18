import { connect } from 'react-redux';
import Home from './component';
import { loadPeople } from '../people/actions';
import { loadDoors } from '../doors/actions';
import { setAppUser, checkAccess } from './actions';

const getPeople = state => {
    const people = state.people.people.asMutable({ deep: true });
    return people.map(person => {
        return { ...person, label: person.name, value: person.id };
    });
};

const mapStateToProps = state => {
    return {
        people: getPeople(state),
        doors: state.doors.doors,
        user: state.home.user,
        shouldGrantAccess: state.home.shouldGrantAccess,
    };
};

const mapDispatchToProps = {
    loadPeople,
    loadDoors,
    setAppUser,
    checkAccess
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
