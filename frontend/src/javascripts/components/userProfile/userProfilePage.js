import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import UserProfile from './userProfile'
import UserProfilePhoto from './userProfileComponents/userProfilePhoto';
import UserProfileForm from './userProfileComponents/userProfileForm';
import { changeUserData, getCurrentUser } from './userProfileActions';
import { Header } from 'semantic-ui-react';
import '../../../images/logo.png'
import './userProfile.scss';

class UserProfilePage extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        const handleInput = props.handleInput;
        const handleSubmitForm = props.handleSubmitForm;
        const getCurrentUser = props.getCurrentUser;
    }
    componentWillMount(){
        this.props.getCurrentUser();
    }

    render() {
        return (
        <div>
            <div className ='home-page-header' >
                <Link to={'/'}><img className='logo' src='../../../images/logo.png'/></Link>
                <UserProfile user={this.props.user}/>
            </div>
            <div className='user-profile-wrapper'>
                <UserProfilePhoto />
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
    handleSubmitForm: (_id, formData) => { dispatch(changeUserData(_id, formData))},
    getCurrentUser:() => {dispatch(getCurrentUser())}
  }
}




UserProfilePage = connect(mapStateToProps, mapDispatchToProps)(UserProfilePage)

export default UserProfilePage