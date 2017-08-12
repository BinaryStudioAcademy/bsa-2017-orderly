import React from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import * as LogoutActions from './logoutActions';

class Logout extends React.Component {

    componentWillMount(){
        // Redirect to login page if user is logged in
        this.props.logout();
    }

    render(){
        return null;
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Object.assign({}, LogoutActions),  dispatch);
}

export default connect(null, mapDispatchToProps)(Logout);