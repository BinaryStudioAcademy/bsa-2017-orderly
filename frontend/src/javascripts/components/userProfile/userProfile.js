import React, {Component} from 'react';
import R from 'ramda'
import './userProfile.scss';
import { Link } from 'react-router';
import { Icon, Image } from 'semantic-ui-react';
import avatar from '../../../images/avatar.png';
import { getRolesBackgroundColor, createRolesObject } from '../homePage/homePageService'
import AppConfig from '../../config';

class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            avatar: this.props.user && this.props.user.avatar ? this.props.user.avatar : ''
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.user) {
            this.setState({ 
            avatar: nextProps.user.avatar ? nextProps.user.avatar : '' 
            })
        }
    }

    render() {
        let username = '';
        let rolesObject
        if (this.props.user) {
            username = this.props.user.firstName + ' ' + this.props.user.lastName;
	        rolesObject = R.path([this.props.user._id, 'role'])(createRolesObject(this.props.members) || [])
        }
        return (
            <span id="user-info" className="header-icon">
                <Link to={'/user-page'} title={username}>
                    <Image  src={ this.state.avatar != '' ?
                        `${AppConfig.host}/files/${this.props.user.avatar}`
                        : avatar}
                            avatar />
                    <span className="user-status"
                          style={getRolesBackgroundColor(rolesObject)}/>
                </Link>
            </span>
        );
    }
}


export default UserProfile;