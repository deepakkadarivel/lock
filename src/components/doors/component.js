import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Fab from '../fab';
import Dialog from '../dialog';
import t from '../../translation';
import Form from '../form';
import Card from '../card';

class Doors extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDialogVisible: false,
            name: ''
        };
        this.toggleDialog = this.toggleDialog.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.setName = this.setName.bind(this);
    }

    componentDidMount() {
        const { loadDoors } = this.props;
        loadDoors();
    }

    setName(name) {
        this.setState({ name });
    }

    toggleDialog() {
        const { isDialogVisible } = this.state;
        this.setState({ isDialogVisible: !isDialogVisible });
    }

    handleSubmit(e) {
        const { name } = this.state;
        const { addDoor } = this.props;
        e.preventDefault();
        addDoor(name);
        this.setName('');
        this.toggleDialog();
    }

    render() {
        const { isDialogVisible, name } = this.state;
        const { doors, deleteDoor } = this.props;
        return (
            <div>
                <h1>Doors</h1>
                {doors.map(door => (
                    <Card
                        icon="meeting_room"
                        text={door.name}
                        key={door.id}
                        onDelete={() => deleteDoor(door.id)}
                    />
                ))}
                <Fab onClick={this.toggleDialog} icon="add" />
                {isDialogVisible && (
                    <Dialog
                        header={t('add.door')}
                        form={
                            <Form
                                toggleDialog={this.toggleDialog}
                                handleSubmit={this.handleSubmit}
                            >
                                <input
                                    className="Form-input"
                                    type="text"
                                    // eslint-disable-next-line jsx-a11y/no-autofocus
                                    autoFocus
                                    value={name}
                                    placeholder={t('placeHolder.doorName')}
                                    required
                                    onChange={e => this.setName(e.target.value)}
                                />
                            </Form>
                        }
                    />
                )}
            </div>
        );
    }
}

Doors.propTypes = {
    addDoor: PropTypes.func.isRequired,
    loadDoors: PropTypes.func.isRequired,
    deleteDoor: PropTypes.func.isRequired,
    doors: PropTypes.array.isRequired
};

export default Doors;
