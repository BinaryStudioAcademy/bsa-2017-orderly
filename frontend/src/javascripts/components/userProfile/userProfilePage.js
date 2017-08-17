import React, {Component} from 'react';
import UserProfile from './userProfile'
import HomePageHeader from '../homePage/homePageHeader';
import UserProfilePhoto from './UserProfileComponents/UserProfilePhoto';
import UserProfileForm from './UserProfileComponents/UserProfileForm';
import { Header } from 'semantic-ui-react';
import './userProfile.scss';

class UserProfilePage extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }
    render() {
      console.log(this.props)
        return (
        <div>
            <HomePageHeader />
            <div className='user-profile-wrapper'>
                <UserProfilePhoto />
                <div className ='user-profile-info'>
                    <Header block >My Profile</Header>
                    <UserProfileForm/>
                </div>
            </div>
        </div>
        );
    }
}

export default UserProfilePage