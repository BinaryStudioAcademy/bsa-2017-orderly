import React from 'react';
import { Icon } from 'semantic-ui-react';
import UserProfile from '../userProfile/userProfile';
import { Link } from 'react-router';
import '../../../images/logo.png'

let HomePageHeader = (props) => {
    console.log(props)
  return (
    <div className ='home-page-header' >
      <Link to={'/'}><img className='logo' src='../../../images/logo.png'/></Link>
      <UserProfile user={props.user}/>
    </div>
  )
}

export default HomePageHeader