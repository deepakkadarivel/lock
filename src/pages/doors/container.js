import { connect } from 'react-redux';
import Doors from './component';
import {
    loadDoors,
    addDoor,
    deleteDoor,
    updateDoor,
    getSelectedDoor
} from './actions';

const mapStateToProps = state => {
    return {
        doors: state.doors.doors,
        selectedDoor: state.doors.selectedDoor
    };
};

const mapDispatchToProps = {
    loadDoors,
    addDoor,
    deleteDoor,
    updateDoor,
    getSelectedDoor
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Doors);
