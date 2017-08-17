import React, {Component} from 'react';
import './userProfile.scss';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { Link } from 'react-router';
import { Icon } from 'semantic-ui-react';
import * as UserProfileActions from './userProfileActions';

class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    componentWillMount(){
        this.props.getCurrentUser();
    }

    getUserName(){
        console.log('Get user name action called!');
        this.props.getUserName({ userId: 1 });
    }

    changeUserNameColor(e){
        console.log('Get user name color action called!');
        this.props.changeUserNameColor({ color: e.target.value});	

    }

    render() {
        return (
            <div id="user-info">
                {this.props.user && <span>{this.props.user.firstName + ' ' + this.props.user.lastName}</span>}
                <div><Link to={'/logout'} className="logout"><Icon name="log out"/>Logout</Link></div>
            </div>
        );
        /*
                <h1>
					User Profile
                </h1>
                <div style={ {color: this.props.userProfile.color} }>
                    <h3>
                        { this.props.userProfile.name }
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
                    <button onClick={this.getUserName.bind(this)}>Get User Name </button>
                </div>
        */
    }
}

function mapStateToProps(state) {
    return {
        userProfile: state.userProfile,
        user: state.userProfile.user
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Object.assign({}, UserProfileActions),  dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);