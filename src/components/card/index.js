import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Card = ({ text, icon, onDelete }) => {
    return (
        <div className="Card">
            <span className="Card-data">
                <i className="material-icons Card-icon">{icon}</i>
                <p className="Card-text">{text}</p>
            </span>
            <span className="Card-action">
                <i
                    role="presentation"
                    className="material-icons"
                    onClick={onDelete}
                >
                    delete
                </i>
            </span>
        </div>
    );
};

Card.propTypes = {
    text: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired
};

export default Card;
