import React from 'react';
import { Icon } from 'semantic-ui-react';
import UserProfile from '../userProfile/userProfile';
import '../../../images/logo.png'

let HomePageHeader = (props) => {
  return (
    <div className ='home-page-header' >
      <img className='logo' src='../../../images/logo.png'/>
      <UserProfile/>
    </div>
  )
}

export default HomePageHeader