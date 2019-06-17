import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import Fab from '../fab';
import Dialog from '../dialog';
import t from '../../translation';
import Form from '../form';
import Door from '../door';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDialogVisible: false
        };
        this.toggleDialog = this.toggleDialog.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        const { loadPeople, loadDoors } = this.props;
        loadPeople();
        loadDoors();
    }

    toggleDialog() {
        const { isDialogVisible } = this.state;
        this.setState({ isDialogVisible: !isDialogVisible });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.toggleDialog();
    }

    render() {
        const { isDialogVisible } = this.state;
        const { people, doors, setAppUser, user, checkAccess } = this.props;

        const customStyles = {
            control: provided => ({
                ...provided,
                marginTop: '10px',
                border: '1px solid black'
            })
        };

        return (
            <div>
                <h1>{t('unlockDoors')}</h1>
                <div className="Doors">
                    {doors.map(door => (
                        <Door
                            text={door.name}
                            key={door.id}
                            onClick={() => {
                                checkAccess(door, user);
                            }}
                        />
                    ))}
                </div>
                <Fab onClick={this.toggleDialog} icon="person_outline" />
                {isDialogVisible && (
                    <Dialog
                        header={t('selectPerson')}
                        showFooter={false}
                        form={
                            <Form
                                toggleDialog={this.toggleDialog}
                                handleSubmit={this.handleSubmit}
                            >
                                <Select
                                    styles={customStyles}
                                    options={people}
                                    placeholder={t('placeholder.selectDoors')}
                                    onChange={option => {
                                        setAppUser(option);
                                        this.toggleDialog();
                                    }}
                                    value={user.name ? user : people[0]}
                                />
                            </Form>
                        }
                    />
                )}
            </div>
        );
    }
}

Home.propTypes = {
    loadPeople: PropTypes.func.isRequired,
    loadDoors: PropTypes.func.isRequired,
    setAppUser: PropTypes.func.isRequired,
    checkAccess: PropTypes.func.isRequired,
    people: PropTypes.array.isRequired,
    doors: PropTypes.array.isRequired,
    user: PropTypes.object.isRequired
};

export default Home;
