import React from 'react';
import { connect } from 'react-redux';
import BaseItem from '../homePageBase/homePageBaseItem';
import HomePageTeamName from './homePageTeamName';
import { addNewBase } from '../homePageActions';
import { showContextMenu } from '../homePageActions';
import ContextMenu from '../../contextMenu/contextMenu';
import { Icon } from 'semantic-ui-react';
import './homePageTeam.scss';

let HomePageTeamBlock  = ({ contextMenu, homePageStore, onMenuClick}) => {
  return (
    <div className = "team-wrapper">
        <div className = "team-header">
          <HomePageTeamName/>
        </div>
        <div className = "team-block-wrapper">
          <div className = 'base-list'>
          { homePageStore.homePageStore.bases.map(function(base, i) {
            return (
              <div key = {i}>
                <BaseItem className = "base-list-item" />
                <div className = 'menu-icon-position'  onClick = { () => onMenuClick(base.id)}
                > 
                  <div className = 'menu-icon-wrapp'>
                    <div className = 'setting'>
                      <Icon inverted link name='setting' size='large' color='black' />
                    </div>
                      <div className ={base.showMenu? "menu-show": "none"}>
                        <div className = 'menu-style'>
                         <ContextMenu />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}) 
          }
          </div>
        </div>
    </div>
  )
}

const mapStateToProps = state => ({
  contextMenu: state,
  homePageStore: state
});

const mapDispatchToProps = dispatch => {
  return {
    onMenuClick: (id) => {dispatch(showContextMenu(id))}
  };
}

HomePageTeamBlock  = connect(mapStateToProps, mapDispatchToProps)(HomePageTeamBlock);


export default HomePageTeamBlock 