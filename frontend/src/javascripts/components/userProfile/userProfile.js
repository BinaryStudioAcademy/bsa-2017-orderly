import React, {Component} from 'react';
import './userProfile.scss';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { Link } from 'react-router';
import { Icon, Image } from 'semantic-ui-react';
import * as UserProfileActions from './userProfileActions';
import avatar from '../../../images/avatar.png';

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

    // changeUserNameColor(e){
    //     console.log('Get user name color action called!');
    //     this.props.changeUserNameColor({ color: e.target.value});	

    // }

    render() {
        console.log(this.props)
        return (
            <div id="user-info">
                <Link to={'/user-page'}>
                    <Image src={avatar} avatar />
                    {this.props.user && <span>{this.props.user.firstName + ' ' + this.props.user.lastName}</span>}
                </Link>
                <div className="user-profile-logout-wrapper">
                    <Link to={'/logout'} className="logout">
                        <Icon name="log out"/>Logout
                    </Link>
                </div>
            </div>
        );
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