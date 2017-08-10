import React from 'react';
import { connect } from 'react-redux';
import { showContextMenu } from './contextMenuActions';
import BaseName from './contextMenuInput';
import BaseColor from './contextMenuBaseColor';
import BaseIcon from './contextMenuBaseIcon';
import BaseOptions from './contextMenuBaseOptions';
import { Icon } from 'semantic-ui-react';
import './contextMenu.scss';


const NewBaseDiv = ({ contextMenu, onMenuClick, showMenu}) => {
  return (
    <div className = "new-base-wrapper">
      <div className= "base-title">{contextMenu.contextMenu.name}</div>
        <div className = "new-base-container" 
          onClick={() => onMenuClick(contextMenu)} 
          style = {{backgroundColor: `${contextMenu.contextMenu.color}` }}
        >
          <Icon inverted link name={contextMenu.contextMenu.icon} color='black' size='huge' />
        </div>
        <div className ={contextMenu.contextMenu.showMenu? "menu": "none"}>
          <BaseName />
          <BaseColor />
          <BaseIcon />
          <BaseOptions />
        </div>
    </div>
  )
}

const mapStateToProps = state => ({
  contextMenu: state
});

const mapDispatchToProps = dispatch => {
  return {
    onMenuClick: (contextMenu) => {dispatch(showContextMenu(contextMenu))}
  };
}

const ContextMenuShow = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewBaseDiv)

export default ContextMenuShow