import React from 'react';
import { connect } from 'react-redux';
import { showContextMenu } from './contextMenuActions';
import ContextMenu from './contextMenu'
import { Icon } from 'semantic-ui-react';
import './contextMenu.scss';


const MenuIcon = ({ contextMenu, onMenuClick, showMenu}) => {
  return (
    <div className = 'menu-icon-wrapp'>
      <div onClick={() => onMenuClick(contextMenu)} className = 'setting'>
        <Icon inverted link name='setting' size='large' color='black' />
      </div>
      <ContextMenu/>
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

const ContextMenuIcon = connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuIcon)

export default ContextMenuIcon