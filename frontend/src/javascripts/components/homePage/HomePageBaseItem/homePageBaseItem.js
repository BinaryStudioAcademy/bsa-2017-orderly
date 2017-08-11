import React from 'react';
import { connect } from 'react-redux';
import ContextMenuIcon from '../../contextMenu/contextMenuIcon';
import { Icon } from 'semantic-ui-react';
import { addNewBase } from '../homePageActions'
import './homePageBaseItem.scss';

let name = 'New Base';
const BaseItem = ({contextMenu, onNewBaseClick }) => {
  return (
    <div className = 'one-base-wrapper' onClick = { () => onNewBaseClick(name) }>
      <div className = 'one-base' style = {{backgroundColor: `${contextMenu.contextMenu.color}` }}>
        <div className = 'one-base-icon'>
          <Icon inverted link name={contextMenu.contextMenu.icon} size='huge'/>
          </div>
      </div>
      <div className = 'menu-icon-position'>
        <ContextMenuIcon />
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  contextMenu: state
});

const mapDispatchToProps = dispatch => {
  return {
    onNewBaseClick: (name) => { dispatch(addNewBase(name))},
    onMenuClick: (contextMenu) => {dispatch(showContextMenu(contextMenu))}
  };
}

const HomePageBaseItem = connect(
  mapStateToProps,
  null
)(BaseItem)

export default HomePageBaseItem
