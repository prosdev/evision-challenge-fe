import React from 'react';

const AlertMessage = ({alertClass, message}) => {
    return(
        <div className={`alert alert-${alertClass}`}><strong>Oh snap!</strong> {message}</div>
    )
};

export default AlertMessage;