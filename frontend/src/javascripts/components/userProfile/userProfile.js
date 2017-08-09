import React, {Component} from 'react';
import {Link} from 'react-router';
import './userProfile.scss';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as UserProfileActions from './userProfileActions';

class UserProfile extends Component {

    constructor(props) {
        super(props);
        this.props = props;
    }

    getUserName() {
        console.log('Get user name action called!');
        this.props.getUserName({userId: 1});
    }

    changeUserNameColor(e) {
        console.log('Get user name color action called!');
        this.props.changeUserNameColor({color: e.target.value});
    }

    render() {
        return (
            <div>
                <h1>
                    User Profile
                </h1>
                <div style={{color: this.props.userProfile.color}}>
                    <h3>
                        {this.props.userProfile.name}
                    </h3>
                </div>
                <div>
                    <select onChange={this.changeUserNameColor.bind(this)} value={this.props.userProfile.color}>
                        <option value='red'>red</option>
                        <option value='green'>green</option>
                        <option value='blue'>blue</option>
                    </select>
                </div>
                <div>
                    <button onClick={this.getUserName.bind(this)}>Get User Name</button>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        userProfile: state.userProfile
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Object.assign({}, UserProfileActions), dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);