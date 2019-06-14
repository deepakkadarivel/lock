import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Dialog = ({ header, form }) => {
    return (
        <div className="Dialog">
            {header && <h2>{header}</h2>}
            {form}
        </div>
    );
};

Dialog.propTypes = {
    form: PropTypes.node.isRequired,
    header: PropTypes.string
};

Dialog.defaultProps = {
    header: ''
};

export default Dialog;
