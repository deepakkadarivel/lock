import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import Fab from '../../components/fab/index';
import Dialog from '../../components/dialog/index';
import t from '../../translation/index';
import Door from '../../components/door/index';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDialogVisible: false
        };
        this.toggleDialog = this.toggleDialog.bind(this);
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
            <div className="Home">
                <h1>{t('unlockDoors')}</h1>
                {!doors.length && <p>{t('empty.home')}</p>}
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
                        form={
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
