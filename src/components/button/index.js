import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Button = props => {
    const { className, children, onClick } = props;
    return (
        <button type="button" className={`${className} Btn`} onClick={onClick}>
            {children}
        </button>
    );
};

Button.propTypes = {
    className: PropTypes.string,
    children: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};

Button.defaultProps = {
    className: 'Btn-default'
};

export default Button;
