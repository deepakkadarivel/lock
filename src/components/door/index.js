import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Door = ({ text, onClick }) => {
    return (
        <div className="Doors-item" onClick={onClick} role="presentation">
            <i className="material-icons">meeting_room</i>
            {text}
        </div>
    );
};

Door.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};

export default Door;
