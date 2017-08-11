import React from 'react';
import { connect } from 'react-redux';
import { Icon } from 'semantic-ui-react';
import HomePageTeamBlock from './HomePageTeam/homePageTeamBlock';
import HomePageHeader from './homePageHeader';
import './homePage.scss';

const HomePage = () => {
  return (
    <div className = "home-page-wrapper">
      <HomePageHeader />
      <div className = 'body'>
        <HomePageTeamBlock />
        <HomePageTeamBlock />
      </div>
    </div>
  )
}


export default HomePage