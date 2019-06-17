import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Card = ({ text, subText, icon, onDelete, onClick }) => {
    return (
        <div className="Card" onClick={onClick} role="presentation">
            <span className="Card-data">
                <i className="material-icons Card-icon">{icon}</i>
                <div>
                    <p className="Card-data--text">{text}</p>
                    {subText && <p className="Card-data--subText">{subText}</p>}
                </div>
            </span>
            {onDelete && (
                <span className="Card-action">
                    <i
                        role="presentation"
                        className="material-icons"
                        onClick={onDelete}
                    >
                        delete
                    </i>
                </span>
            )}
        </div>
    );
};

Card.propTypes = {
    text: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    subText: PropTypes.string,
    onDelete: PropTypes.func,
    onClick: PropTypes.func
};

Card.defaultProps = {
    subText: '',
    onClick: null,
    onDelete: null
};

export default Card;
