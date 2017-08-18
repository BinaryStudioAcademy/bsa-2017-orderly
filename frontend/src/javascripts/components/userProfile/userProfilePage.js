import React, {Component} from 'react';
import { connect } from 'react-redux';
import UserProfile from './userProfile'
import HomePageHeader from '../homePage/homePageHeader';
import UserProfilePhoto from './userProfileComponents/userProfilePhoto';
import UserProfileForm from './userProfileComponents/userProfileForm';
import { changeUserData, changeUserProfileField } from './userProfileActions';
import { Header } from 'semantic-ui-react';
import './userProfile.scss';

class UserProfilePage extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        const handleInput = props.handleInput;
    }

    render() {
        return (
        <div>
            <HomePageHeader />
            <div className='user-profile-wrapper'>
                <UserProfilePhoto />
                <div className ='user-profile-info'>
                    <Header block >My Profile</Header>
                    <UserProfileForm 
                        user={this.props.user}
                    />
                </div>
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

const mapDispatchToProps = (dispatch) => {
  return {
    handleInput: (value) => { dispatch(changeUserProfileField({ value: e.target.value}))},
  }
}


UserProfilePage = connect(mapStateToProps, mapDispatchToProps)(UserProfilePage)

export default UserProfilePage