import React, {Component} from 'react';
import './userProfile.scss';
import { Link } from 'react-router';
import { Icon, Image } from 'semantic-ui-react';
import avatar from '../../../images/avatar.png';

class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            avatar: ''
        }
    }
    componentWillReceiveProps(nextProps) {
        this.setState({ 
        avatar: nextProps.user.avatar ? nextProps.user.avatar : '' 
        })
    }

    render() {
        return (
            <div id="user-info">
                <Link to={'/user-page'}>
                    <Image  src={ this.state.avatar != '' ? 
                        `http://localhost:2020/files/${this.props.user.avatar}` 
                        : avatar} 
                    avatar />
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


export default UserProfile