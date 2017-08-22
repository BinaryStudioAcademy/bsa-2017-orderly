import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import UserProfile from './userProfile'
import UserProfilePhoto from './userProfileComponents/userProfilePhoto';
import UserProfileForm from './userProfileComponents/userProfileForm';
import { changeUserData, getCurrentUser, uploadSuccess, getAvatarByPath } from './userProfileActions';
import { Header } from 'semantic-ui-react';
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
    componentWillReceiveProps(nextProps) { 
        this.props.getAvatarByPath(nextProps.user.avatar);
    }

    render() {
        return (
        <div>
            <div className ='home-page-header' >
                <Link to={'/'}><img className='logo' src='../../../images/logo.png'/></Link>
                <UserProfile user={this.props.user} />
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
    handleSubmitForm: (_id, type, formData) => { 
        if ( type === 'form' ) {
            dispatch(changeUserData(_id, formData))
        }
    },
    handleFile: (data) => {
        dispatch(uploadSuccess(data))
    }, 
    getCurrentUser:() => {dispatch(getCurrentUser())}, 
    getAvatarByPath:(path) => {dispatch(getAvatarByPath(path))}
  }
}




UserProfilePage = connect(mapStateToProps, mapDispatchToProps)(UserProfilePage)

export default UserProfilePage