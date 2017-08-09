import React from 'react';
import { Message } from 'semantic-ui-react';

const ErrorMessage = ({errorText}) => (
    <Message >
        <Message.Header>
            Sign in failed!
        </Message.Header>
        <p className="error-message">
            {errorText}
        </p>
    </Message>
);

// ErrorMessage.propTypes = {
//     errorText: PropTypes.string.isRequired
// };

export default ErrorMessage;