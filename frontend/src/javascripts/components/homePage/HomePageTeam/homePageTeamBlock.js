import React from 'react';
import { connect } from 'react-redux';
import HomePageBaseItem from '../HomePageBaseItem/homePageBaseItem';
import HomePageTeamName from './homePageTeamName';
import { addNewBase } from '../homePageActions';
import './homePageTeam.scss';

let HomePageTeamBlock  = ({ bases, onNewBaseClick }) => {
  return (
      // { bases.map(function(base, id) {
      //   return (
          <div className = "team-wrapper">
              <div className = "team-header">
                <HomePageTeamName/>
              </div>
              <div className = "team-block-wrapper">
                <div className = 'base-list'>
                  <HomePageBaseItem className = "base-list-item" />
                </div>
              </div>
          </div>
      // )})}
  )
}

HomePageTeamBlock  = connect()(HomePageTeamBlock );

export default HomePageTeamBlock 