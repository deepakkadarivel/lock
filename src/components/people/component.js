import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Select from 'react-select';
import Fab from '../fab';
import Dialog from '../dialog';
import t from '../../translation';
// import Form from '../form';
import Card from '../card';

class People extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDialogVisible: false,
            isUpdate: false
        };
        this.toggleDialog = this.toggleDialog.bind(this);
        this.toggleUpdate = this.toggleUpdate.bind(this);
    }

    componentDidMount() {
        const { loadPeople, loadDoors, getPerson } = this.props;
        loadPeople();
        loadDoors();
        getPerson();
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
            people,
            deletePerson,
            doors,
            getPerson,
            selectdPerson,
            updatePerson,
            addPerson
        } = this.props;

        const customStyles = {
            control: provided => ({
                ...provided,
                marginTop: '10px',
                border: '1px solid black'
            })
        };

        return (
            <div>
                <h1>{t('nav.people')}</h1>
                {people.map(person => (
                    <Card
                        icon="person_outline"
                        text={person.name}
                        subText={`${t('accessibleDoors')}: ${
                            person.accessibleDoors.length
                                ? person.accessibleDoors
                                    .map(door => door.name)
                                    .toString()
                                : '- -'
                        }`}
                        key={person.id}
                        onDelete={() => deletePerson(person.id)}
                        onClick={() => {}}
                    />
                ))}
                <Fab
                    onClick={() => {
                        this.toggleDialog();
                        this.toggleUpdate(false);
                        getPerson();
                    }}
                    icon="add"
                />
                {isDialogVisible && (
                    <Dialog
                        header={isUpdate ? t('updatePerson') : t('addPerson')}
                        form={
                            <Formik
                                initialValues={{
                                    name: selectdPerson.name,
                                    accessibleDoors:
                                        selectdPerson.accessibleDoors
                                }}
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
                                        updatePerson(
                                            selectdPerson.id,
                                            values.name
                                        );
                                    } else {
                                        addPerson(
                                            values.name,
                                            values.accessibleDoors
                                        );
                                    }
                                    setSubmitting(false);
                                }}
                            >
                                {({
                                    isSubmitting,
                                    setFieldValue,
                                    setFieldTouched
                                }) => (
                                    <Form>
                                        <Field
                                            className="Form-input"
                                            type="text"
                                            autoFocus
                                            name="name"
                                            placeholder={t(
                                                'placeholder.personName'
                                            )}
                                        />
                                        <ErrorMessage
                                            name="name"
                                            component="div"
                                            className="Form-input--error"
                                        />
                                        <Select
                                            name="accessibleDoors"
                                            options={doors}
                                            isMulti
                                            onChange={e => {
                                                setFieldValue(
                                                    'accessibleDoors',
                                                    e
                                                );
                                            }}
                                            onBlur={setFieldTouched}
                                            styles={customStyles}
                                            closeMenuOnSelect={false}
                                        />
                                        <div className="Form-footer">
                                            <button
                                                type="button"
                                                className="Btn"
                                                onClick={this.toggleDialog}
                                            >
                                                {t('buttons.cancel')}
                                            </button>
                                            <button
                                                type="submit"
                                                className="Btn Btn-primary"
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
                            // <Form
                            //     toggleDialog={this.toggleDialog}
                            //     handleSubmit={this.handleSubmit}
                            // >
                            //     <input
                            //         className="Form-input"
                            //         type="text"
                            //         // eslint-disable-next-line jsx-a11y/no-autofocus
                            //         autoFocus
                            //         value={name}
                            //         placeholder={t('placeholder.personName')}
                            //         required
                            //         onChange={e => this.setName(e.target.value)}
                            //     />

                            //     <Select
                            //         styles={customStyles}
                            //         closeMenuOnSelect={false}
                            //         isMulti
                            //         options={doors}
                            //         placeholder={t('placeholder.selectDoors')}
                            //         onChange={option =>
                            //             this.setAccessibleDoors(option)
                            //         }
                            //     />
                            // </Form>
                        }
                    />
                )}
            </div>
        );
    }
}

People.propTypes = {
    addPerson: PropTypes.func.isRequired,
    loadPeople: PropTypes.func.isRequired,
    getPerson: PropTypes.func.isRequired,
    loadDoors: PropTypes.func.isRequired,
    deletePerson: PropTypes.func.isRequired,
    updatePerson: PropTypes.func.isRequired,
    people: PropTypes.array.isRequired,
    doors: PropTypes.array.isRequired,
    selectdPerson: PropTypes.object.isRequired
};

export default People;
