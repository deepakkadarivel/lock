import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Fab from '../../components/fab/index';
import Dialog from '../../components/dialog/index';
import t from '../../translation/index';
import Card from '../../components/card/index';

class Doors extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDialogVisible: false,
            isUpdate: false
        };
        this.toggleDialog = this.toggleDialog.bind(this);
    }

    componentDidMount() {
        const { loadDoors, getSelectedDoor } = this.props;
        loadDoors();
        getSelectedDoor();
    }

    toggleDialog() {
        const { isDialogVisible } = this.state;
        this.setState({ isDialogVisible: !isDialogVisible });
    }

    toggleUpdate(isUpdate) {
        this.setState({ isUpdate });
    }

    render() {
        const { isDialogVisible, isUpdate } = this.state;
        const {
            doors,
            deleteDoor,
            addDoor,
            selectedDoor,
            getSelectedDoor,
            updateDoor
        } = this.props;
        return (
            <div>
                <h1>{t('nav.doors')}</h1>
                {!doors.length && (
                    <p className="t-placeholder">{t('empty.doors')}</p>
                )}
                {doors.map(door => (
                    <Card
                        icon="meeting_room"
                        text={door.name}
                        key={door.id}
                        onDelete={() => deleteDoor(door.id)}
                    />
                ))}
                <Fab
                    onClick={() => {
                        this.toggleDialog();
                        this.toggleUpdate(false);
                        getSelectedDoor();
                    }}
                    icon="add"
                />
                {isDialogVisible && (
                    <Dialog
                        header={isUpdate ? t('updateDoor') : t('addDoor')}
                        form={
                            <Formik
                                initialValues={selectedDoor}
                                enableReinitialize
                                validate={values => {
                                    const errors = {};
                                    if (!values.name) {
                                        errors.name = 'Required';
                                    }
                                    return errors;
                                }}
                                onSubmit={(values, { setSubmitting }) => {
                                    this.toggleDialog();
                                    if (isUpdate) {
                                        updateDoor(
                                            selectedDoor.id,
                                            values.name
                                        );
                                    } else {
                                        addDoor(values.name);
                                    }
                                    setSubmitting(false);
                                }}
                            >
                                {({ isSubmitting }) => (
                                    <Form>
                                        <Field
                                            className="Form-input t-input--name"
                                            type="text"
                                            autoFocus
                                            name="name"
                                            placeholder={t(
                                                'placeholder.doorName'
                                            )}
                                        />
                                        <ErrorMessage
                                            name="name"
                                            component="div"
                                            className="Form-input--error"
                                        />
                                        <div className="Form-footer">
                                            <button
                                                type="button"
                                                className="Btn t-cancel"
                                                onClick={this.toggleDialog}
                                            >
                                                {t('buttons.cancel')}
                                            </button>
                                            <button
                                                type="submit"
                                                className="Btn Btn-primary t-add"
                                                disabled={isSubmitting}
                                            >
                                                {isUpdate
                                                    ? t('buttons.update')
                                                    : t('buttons.add')}
                                            </button>
                                        </div>
                                    </Form>
                                )}
                            </Formik>
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
    updateDoor: PropTypes.func.isRequired,
    getSelectedDoor: PropTypes.func.isRequired,
    doors: PropTypes.array.isRequired,
    selectedDoor: PropTypes.object.isRequired
};

export default Doors;
