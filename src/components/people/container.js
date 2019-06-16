import { connect } from 'react-redux';
import People from './component';
import { loadPeople, getPerson, addPerson, deletePerson, updatePerson } from './actions';
import { loadDoors } from '../doors/actions';

const getDoors = state => {
    const doors = state.doors.doors.asMutable({ deep: true });
    return doors.map(door => {
        return { ...door, label: door.name, value: door.id };
    });
};

const mapStateToProps = state => {
    return {
        people: state.people.people,
        selectdPerson: state.people.selectdPerson,
        doors: getDoors(state)
    };
};

const mapDispatchToProps = {
    loadPeople,
    getPerson,
    addPerson,
    deletePerson,
    updatePerson,
    loadDoors
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(People);
