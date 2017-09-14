import React from 'react';
import { Icon } from 'semantic-ui-react';
import UserProfile from '../userProfile/userProfile';
import { Link } from 'react-router';
import '../../../images/logo.png'

let HomePageHeader = (props) => {
  return (
    <div className ='home-page-header' >
      <Link to={'/'}><img className='logo' src='../../../images/logo.png'/></Link>
      <span className="user-profile-logout-wrapper header-icon">
        <Link to={'/logout'} className="logout" title="Logout">
          <Icon name="log out" size="large" />
        </Link>
      </span>
      <UserProfile user={props.user} avatar={props.avatar}/>
    </div>
  )
}

export default HomePageHeader