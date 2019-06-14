import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Fab = props => {
    const { onClick, icon } = props;
    return (
        <button type="button" className="Fab ripple" onClick={onClick}>
            <i className="material-icons">{icon}</i>
        </button>
    );
};

Fab.propTypes = {
    onClick: PropTypes.func.isRequired,
    icon: PropTypes.string.isRequired
};

export default Fab;
