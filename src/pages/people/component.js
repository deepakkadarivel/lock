import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Select from 'react-select';
import Fab from '../../components/fab/index';
import Dialog from '../../components/dialog/index';
import t from '../../translation/index';
import Card from '../../components/card/index';

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
                {!people.length && (
                    <p className="t-placeholder">{t('empty.people')}</p>
                )}
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
                                            className="Form-input t-input--name"
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
                                            className="t-input--doors"
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
