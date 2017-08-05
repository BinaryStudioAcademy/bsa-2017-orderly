import React from 'react';
import PropTypes from 'prop-types';
const App = (props) => (
    <div className="page-container">
        {React.cloneElement({...props}.children, {...props})}
    </div>
);

App.propTypes = {
    children: PropTypes.element.isRequired
};

export default App;
