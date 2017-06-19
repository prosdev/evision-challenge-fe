import React from 'react';
import PropTypes from 'prop-types';

/**
 *  Alert users with specific alert messages! Informative? Warning?! Danger zone?! Or just plain success?!
 *
 * @param alertClass
 * @param message
 * @returns {HTML}
 */
const AlertMessage = ({alertClass, message}) => {
    return(
        <div className={`alert alert-${alertClass}`}><strong>Oh snap!</strong> {message}</div>
    )
};

AlertMessage.propTypes = {
    /** Types of alert. Can take in "info", "warning", "success", or "danger" */
    alertClass: PropTypes.string.isRequired,

    /** Message to display */
    message: PropTypes.string.isRequired
};

AlertMessage.defaultProps = {
    alertClass: 'danger',
    message: 'Please enter a valid US zip code!'
};

export default AlertMessage;