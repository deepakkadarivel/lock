import React from 'react';
import PropTypes from 'prop-types';
import t from '../../translation';
import './style.scss';

const Form = props => {
    const { toggleDialog, handleSubmit, children, showFooter } = props;
    return (
        <form className="Form" onSubmit={handleSubmit}>
            {children}
            {showFooter && (
                <div className="Form-footer">
                    <input
                        type="button"
                        className="Btn"
                        onClick={toggleDialog}
                        value={t('buttons.cancel')}
                    />
                    <input
                        type="submit"
                        className="Btn Btn-primary"
                        value={t('buttons.add')}
                    />
                </div>
            )}
        </form>
    );
};

Form.propTypes = {
    toggleDialog: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
    showFooter: PropTypes.bool
};

Form.defaultProps = {
    showFooter: true
};

export default Form;
