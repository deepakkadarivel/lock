import { connect } from 'react-redux';
import Doors from './component';
import { loadDoors, addDoor, deleteDoor, updateDoor } from './actions';

const mapStateToProps = state => {
    return {
        doors: state.doors.doors
    };
};

const mapDispatchToProps = {
    loadDoors,
    addDoor,
    deleteDoor,
    updateDoor
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Doors);
