import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import UserProfile from './userProfile'
import UserProfilePhoto from './userProfileComponents/userProfilePhoto';
import UserProfileForm from './userProfileComponents/userProfileForm';
import { changeUserData, getCurrentUser, uploadSuccess, getAvatarByPath } from './userProfileActions';
import logout from '../../../images/Logout.png';
import { Header, Icon } from 'semantic-ui-react';
import '../../../images/logo.png'
import './userProfile.scss';

class UserProfilePage extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        const handleFile = props.handleFile;
        const handleSubmitForm = props.handleSubmitForm;
        const getCurrentUser = props.getCurrentUser;
        const getAvatarByPath = props.getAvatarByPath;
    }
    componentWillMount(){
        this.props.getCurrentUser();            
    }

    render() {
        return (
        <div>
            <div className ='home-page-header' >
                <Link to={'/'}><img className='logo' src='../../../images/logo.png'/></Link>
                <span className="user-profile-logout-wrapper header-icon">
                    <Link to={'/logout'} className="logout" title="Logout">
                        <Icon name="log out" size="large" />
                    </Link>
                </span>
                <UserProfile user={this.props.user}/>
            </div>
            <div className='user-profile-wrapper'>
                <UserProfilePhoto 
                    user={this.props.user}
                    handleFile = {this.props.handleFile}
                />
                <div className ='user-profile-info'>
                    <Header block >My Profile</Header>
                    <UserProfileForm 
                        user={this.props.user}
                        handleSubmitForm = {this.props.handleSubmitForm}
                    />
                </div>
            </div>
        </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.userProfile.user
    };
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmitForm: (_id, formData) => { 
        dispatch(changeUserData(_id, formData))
    },
    handleFile: (data, path) => {
        dispatch(uploadSuccess(data))
    }, 
    getCurrentUser:() => {dispatch(getCurrentUser())}
  }
}




UserProfilePage = connect(mapStateToProps, mapDispatchToProps)(UserProfilePage)

export default UserProfilePage